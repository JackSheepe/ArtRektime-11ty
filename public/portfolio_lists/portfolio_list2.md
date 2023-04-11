---
title: Полиграфия
layout: ./layouts/wgallery2.html
portfolioListLitle: Полиграфия
список_продукции:
  - визитки
  - листовки
  - буклеты
  - календари
  - блокноты
  - открытки
  - конверты
  - бланки
  - упаковочная продукция
  - афиши
  - постеры
  - плакаты
links:
---

<h1 class="main-title" id="1">Визитки</h1>

<div class="portfolio-works">
<div class="portfolio-works__grid8">
{% for visitka in collections.visitka %}
<div
class="portfolio-works__wrapper"
data-name="{{ visitka.data.name }}"
data-description="{{ visitka.data.description }}"
>
<div class="portfolio-works__img-container">
<img src="{{ visitka.data.img }}" alt="{{ visitka.data.alt }}" class="portfolio-works__img"/>
</div>
</div>
{% endfor %}
</div>
<div class="portfolio-works__description">
<p class="portfolio-works__grid8-description-title"></p>
<p class="portfolio-works__grid8-description-sub"></p>
</div>
</div>
<div class="pagination">
<a href="#1" class="pagination-prev8">Назад</a>
<div class="pagination-page">
Страница <span class="pagination-page-num8">1</span>
</div>
<a href="#1" class="pagination-next8">Вперёд</a>
</div>
