module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets/");
  eleventyConfig.addPassthroughCopy("src/fonts/");
  eleventyConfig.addPassthroughCopy("src/pages/");
  eleventyConfig.addPassthroughCopy("src/styles/");
  eleventyConfig.addPassthroughCopy("src/scripts/");
  eleventyConfig.setDataDeepMerge(true);
  // Return your Object options:
  const htmlmin = require("html-minifier");
  eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
    if (
      outputPath.endsWith(".html") ||
      outputPath.endsWith(".css") ||
      outputPath.endsWith(".js")
    ) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
        minifyJS: true,
        minifyCSS: true,
      });
      return minified;
    }

    return content;
  });
  return {
    dir: {
      input: "src",
      output: "public",
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
};
