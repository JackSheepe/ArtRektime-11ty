---
title: Отделка фасадов и входных групп
layout: ./layouts/wgallery6.html
portfolioListLitle: Отделка фасадов и входных групп
список_продукции:
  - АЗС
  - входные группы
links:
---

<h1 class="main-title" id="1">Комплексное оформление
</h1>

<div class="portfolio-works">
<div class="portfolio-works__grid4">
{% for complexDesign in collections.complexDesign %}
<div
class="portfolio-works__wrapper"
data-name="{{ complexDesign.data.name }}"
data-description="{{ complexDesign.data.description }}"
>
<div class="portfolio-works__img-container">
<img src="{{ complexDesign.data.img }}" alt="{{ complexDesign.data.alt }}" class="portfolio-works__img"/>
</div>
</div>
{% endfor %}
</div>
</div>
<div class="portfolio-works__description">
<p class="portfolio-works__grid4-description-title"></p>
<p class="portfolio-works__grid4-description-sub"></p>
</div>
<div class="pagination">
<a href="#1" class="pagination-prev4">Назад</a>
<div class="pagination-page">
Страница <span class="pagination-page-num4">1</span>
</div>
<a href="#1" class="pagination-next4">Вперёд</a>
</div>

<h1 class="main-title" id="2">Входные группы
</h1>
<div class="portfolio-works">
<div class="portfolio-works__grid5_1row">
{% for entranceGroups in collections.entranceGroups %}
<div
class="portfolio-works__wrapper"
data-name="{{ entranceGroups.data.name }}"
data-description="{{ entranceGroups.data.description }}"
>
<div class="portfolio-works__img-container">
<img src="{{ entranceGroups.data.img }}" alt="{{ entranceGroups.data.alt }}" class="portfolio-works__img"/>
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
<a href="#2" class="pagination-prev5">Назад</a>
<div class="pagination-page">
Страница <span class="pagination-page-num5">1</span>
</div>
<a href="#2" class="pagination-next5">Вперёд</a>
</div>
