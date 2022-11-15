---
title: Бегущие строки и LED экраны
layout: ./layouts/wgallery5.html
portfolioListLitle: Бегущие строки и LED экраны
список_продукции:
  - RGB экраны
  - бегущие строки
links:
  - https://rgbScreens.html
  - https://runningStrings.html
---

<h1>Экраны RGB
</h1>
<div class="portfolio_works_container">
<div class="portfolio_works__grid5__1row">
{% for rgbscreen in collections.rgbscreen %}
<div
class="portfolio_works_wrapper"
data-name="{{ rgbscreen.data.name }}"
data-description="{{ rgbscreen.data.description }}"
>
<div class="portfolio_works_imgcontainer">
<img src="{{ rgbscreen.data.img }}" alt="{{ rgbscreen.data.alt }}" />
</div>
</div>
{% endfor %}
</div>
</div>
<div class="pagination">
<div class="pagination-prev5">Prev</div>
<div class="pagination-page">
Page <span class="pagination-page-num5">1</span>
</div>
<div class="pagination-next5">Next</div>
</div>
