---
title: Отделка фасадов и входных групп
layout: ./layouts/wgallery6.html
portfolioListLitle: Отделка фасадов и входных групп
список_продукции:
  - АЗС
  - входные группы
links:
---

<h1 id="1">Комплексное оформление
</h1>

<div class="portfolio_works_container">
<div class="portfolio_works__grid4">
{% for complexDesign in collections.complexDesign %}
<div
class="portfolio_works_wrapper"
data-name="{{ complexDesign.data.name }}"
data-description="{{ complexDesign.data.description }}"
>
<div class="portfolio_works_imgcontainer">
<img src="{{ complexDesign.data.img }}" alt="{{ complexDesign.data.alt }}" />
</div>
</div>
{% endfor %}
</div>
</div>
<div class="portfolio_works__grid-description">
<p class="portfolio_works__grid4-description-title"></p>
<p class="portfolio_works__grid4-description-sub"></p>
</div>
<div class="pagination">
<a href="#1" class="pagination-prev4">Назад</a>
<div class="pagination-page">
Страница <span class="pagination-page-num4">1</span>
</div>
<a href="#1" class="pagination-next4">Вперёд</a>
</div>

<h1 id="2">Входные группы
</h1>
<div class="portfolio_works_container">
<div class="portfolio_works__grid5__1row">
{% for entranceGroups in collections.entranceGroups %}
<div
class="portfolio_works_wrapper"
data-name="{{ entranceGroups.data.name }}"
data-description="{{ entranceGroups.data.description }}"
>
<div class="portfolio_works_imgcontainer">
<img src="{{ entranceGroups.data.img }}" alt="{{ entranceGroups.data.alt }}" />
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
<a href="#2" class="pagination-prev5">Назад</a>
<div class="pagination-page">
Страница <span class="pagination-page-num5">1</span>
</div>
<a href="#2" class="pagination-next5">Вперёд</a>
</div>
