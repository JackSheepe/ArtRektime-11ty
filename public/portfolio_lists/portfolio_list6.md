---
title: Бегущие строки и LED экраны
layout: ./layouts/wgallery5.html
portfolioListLitle: Бегущие строки и LED экраны
список_продукции:
  - RGB экраны, бегущие строки
links:
---

<h1 id="1">Экраны RGB
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
<div class="portfolio_works__grid-description">
<p class="portfolio_works__grid5__1row-description-title"></p>
<p class="portfolio_works__grid5__1row-description-sub"></p>
</div>
</div>
<div class="pagination">
<a href="#1" class="pagination-prev5">Назад</a>
<div class="pagination-page">
Страница <span class="pagination-page-num5">1</span>
</div>
<a href="#1" class="pagination-next5">Вперёд</a>
</div>
