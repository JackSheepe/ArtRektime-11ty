---
title: Наружная реклама
layout: ./layouts/wgallery1.html
portfolioListLitle: Наружная реклама
список_продукции:
  - вывески
  - лайтбоксы
  - таблички
  - стенды
  - штендеры и рекламные конструкции
  - пожарная безопасность
  - плоттерная резка
links:
---

<h1 class="main-title" id="1">Вывески</h1>

<div class="portfolio-works">
<div class="portfolio-works__grid" id="portfolio-works-grid">
{% for viveska in collections.viveska %}
<div
class="portfolio-works__wrapper"
data-name="{{ viveska.data.name }}"
data-description="{{ viveska.data.description }}"
>
<div class="portfolio-works__img-container">
<img src="{{ viveska.data.img }}" alt="{{ viveska.data.alt }}" loading="lazy" class="portfolio-works__img"/>
</div>
</div>
{% endfor %}
</div>
<div class="portfolio-works__description">
<p class="portfolio-works__grid-description-title"></p>
<p class="portfolio-works__grid-description-sub"></p>
</div>
</div>
<div class="pagination">
<a href="#1" class="pagination-prev">Назад</a>
<div class="pagination-page">
Страница <span class="pagination-page-num">1</span>
</div>
<a href="#1" class="pagination-next">Вперёд</a>
</div>

<h1 class="main-title" id="2">Лайтбоксы</h1>
<div class="portfolio-works">
<div class="portfolio-works__grid2_1row" id="portfolio-works-grid2-1row">
{% for lightbox in collections.lightbox %}
<div
class="portfolio-works__wrapper"
data-name="{{ lightbox.data.name }}"
data-description="{{ lightbox.data.description }}"
>
<div class="portfolio-works__img-container">
<img src="{{ lightbox.data.img }}" alt="{{ lightbox.data.alt }}" loading="lazy" class="portfolio-works__img"/>
</div>
</div>
{% endfor %}
</div>
<div class="portfolio-works__description">
<p class="portfolio-works__grid2_1row-description-title"></p>
<p class="portfolio-works__grid2_1row-description-sub"></p>
</div>
</div>
<div class="pagination">
<a href="#2" class="pagination-prev2">Назад</a>
<div class="pagination-page">
Страница <span class="pagination-page-num2">1</span>
</div>
<a href="#2" class="pagination-next2">Вперёд</a>
</div>

<h1 class="main-title" id="3">Таблички</h1>

<div class="portfolio-works">
<div class="portfolio-works__grid3" id="portfolio-works-grid3">
{% for table in collections.table %}
<div
class="portfolio-works__wrapper"
data-name="{{ table.data.name }}"
data-description="{{ table.data.description }}"
>
<div class="portfolio-works__img-container">
<img src="{{ table.data.img }}" alt="{{ table.data.alt }}" loading="lazy" class="portfolio-works__img"/>
</div>
</div>
{% endfor %}
</div>
<div class="portfolio-works__description">
<p class="portfolio-works__grid3-description-title"></p>
<p class="portfolio-works__grid3-description-sub"></p>
</div>
</div>
<div class="pagination">
<a href="#3" class="pagination-prev3">Назад</a>
<div class="pagination-page">
Страница <span class="pagination-page-num3">1</span>
</div>
<a href="#3" class="pagination-next3">Вперёд</a>
</div>

<h1 class="main-title" id="4">Стенды</h1>

<div class="portfolio-works">
<div class="portfolio-works__grid4" id="portfolio-works-grid4">
{% for stand in collections.stand %}
<div
class="portfolio-works__wrapper"
data-name="{{ stand.data.name }}"
data-description="{{ stand.data.description }}"
>
<div class="portfolio-works__img-container">
<img src="{{ stand.data.img }}" alt="{{ stand.data.alt }}" loading="lazy" class="portfolio-works__img"/>
</div>
</div>
{% endfor %}
</div>
<div class="portfolio-works__description">
<p class="portfolio-works__grid4-description-title"></p>
<p class="portfolio-works__grid4-description-sub"></p>
</div>
</div>
<div class="pagination">
<a href="#4" class="pagination-prev4">Назад</a>
<div class="pagination-page">
Страница <span class="pagination-page-num4">1</span>
</div>
<a href="#4" class="pagination-next4">Вперёд</a>
</div>

<h1 class="main-title" id="5">Штендеры и рекламные конструкции</h1>
<div class="portfolio-works">
<div class="portfolio-works__grid5_1row" id="portfolio-works-grid5">
{% for shtender in collections.shtender %}
<div
class="portfolio-works__wrapper"
data-name="{{ shtender.data.name }}"
data-description="{{ shtender.data.description }}"
>
<div class="portfolio-works__img-container">
<img src="{{ shtender.data.img }}" alt="{{ shtender.data.alt }}" loading="lazy" class="portfolio-works__img"/>
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
<a href="#5" class="pagination-prev5">Назад</a>
<div class="pagination-page">
Страница <span class="pagination-page-num5">1</span>
</div>
<a href="#5" class="pagination-next5">Вперёд</a>
</div>

<h1 class="main-title" id="6">Пожарная безопасность</h1>
<div class="portfolio-works">
<div class="portfolio-works__grid6_1row" id="portfolio-works-grid6">
{% for fireSafety in collections.fireSafety %}
<div
class="portfolio-works__wrapper"
data-name="{{ fireSafety.data.name }}"
data-description="{{ fireSafety.data.description }}"
>
<div class="portfolio-works__img-container">
<img src="{{ fireSafety.data.img }}" alt="{{ fireSafety.data.alt }}" loading="lazy" class="portfolio-works__img"/>
</div>
</div>
{% endfor %}
</div>
<div class="portfolio-works__description">
<p class="portfolio-works__grid6_1row-description-title"></p>
<p class="portfolio-works__grid6_1row-description-sub"></p>
</div>
</div>
<div class="pagination">
<a href="#6" class="pagination-prev6">Назад</a>
<div class="pagination-page">
Страница <span class="pagination-page-num6">1</span>
</div>
<a href="#6" class="pagination-next6">Вперёд</a>
</div>

<h1 class="main-title" id="7">Плоттерная резка и наклейки</h1>
<div class="portfolio-works">
<div class="portfolio-works__grid7_1row" id="portfolio-works-grid7">
{% for plotter in collections.plotter %}
<div
class="portfolio-works__wrapper"
data-name="{{ plotter.data.name }}"
data-description="{{ plotter.data.description }}"
>
<div class="portfolio-works__img-container">
<img src="{{ plotter.data.img }}" alt="{{ plotter.data.alt }}" loading="lazy" class="portfolio-works__img"/>
</div>
</div>
{% endfor %}
</div>
<div class="portfolio-works__description">
<p class="portfolio-works__grid7_1row-description-title"></p>
<p class="portfolio-works__grid7_1row-description-sub"></p>
</div>
</div>
<div class="pagination">
<a href="#7" class="pagination-prev7">Назад</a>
<div class="pagination-page">
Страница <span class="pagination-page-num7">1</span>
</div>
<a href="#7" class="pagination-next7">Вперёд</a>
</div>
