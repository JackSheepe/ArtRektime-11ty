module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets/");
  eleventyConfig.addPassthroughCopy("src/styles/");
  eleventyConfig.addPassthroughCopy("src/scripts/");
  eleventyConfig.addPassthroughCopy("src/services/");
  eleventyConfig.addPassthroughCopy("src/slides/");
  eleventyConfig.addPassthroughCopy("src/gallery_viveski/");
  eleventyConfig.addPassthroughCopy("src/gallery_lightbox/");
  eleventyConfig.addPassthroughCopy("src/portfolio_lists");
  eleventyConfig.addPassthroughCopy("src/polygraphy/");
  eleventyConfig.addPassthroughCopy("src/outsideAd_tables/");
  eleventyConfig.addPassthroughCopy("src/aboutUs.html");
  eleventyConfig.addPassthroughCopy("src/contacts.html");
  eleventyConfig.addPassthroughCopy("src/forClient.html");
  eleventyConfig.addPassthroughCopy("src/paymentAndDelivery.html");
  eleventyConfig.addPassthroughCopy("src/portfolio.html");
  eleventyConfig.addPassthroughCopy("src/services.html");
  eleventyConfig.addPassthroughCopy("src/outsideAd.html");
  eleventyConfig.addPassthroughCopy("src/polygraphy.html");
  eleventyConfig.addPassthroughCopy("src/adPlacement.html");
  eleventyConfig.setDataDeepMerge(true);
  // Return your Object options:
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
