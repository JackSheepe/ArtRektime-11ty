---
title: Бегущие строки и LED экраны
layout: ./layouts/wgallery5.html
portfolioListLitle: Бегущие строки и LED экраны
список_продукции:
  - RGB экраны, бегущие строки
links:
---

<h1 class="main-title" id="1">Экраны RGB
</h1>
<div class="portfolio-works">
<div class="portfolio-works__grid5_1row">
{% for rgbscreen in collections.rgbscreen %}
<div
class="portfolio-works__wrapper"
data-name="{{ rgbscreen.data.name }}"
data-description="{{ rgbscreen.data.description }}"
>
<div class="portfolio-works__img-container">
<img src="{{ rgbscreen.data.img }}" alt="{{ rgbscreen.data.alt }}" class="portfolio-works__img"/>
</div>
</div>
{% endfor %}
</div>
<div class="portfolio-works__description">
<p class="portfolio-works__grid5_1row-description-title"></p>
<p class="portfolio-works__grid5_1row-description-sub"></p>
</div>
</div>
<div class="pagination">
<a href="#1" class="pagination-prev5">Назад</a>
<div class="pagination-page">
Страница <span class="pagination-page-num5">1</span>
</div>
<a href="#1" class="pagination-next5">Вперёд</a>
</div>
