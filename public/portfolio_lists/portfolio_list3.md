---
title: Дизайн
layout: ./layouts/wgallery3.html
portfolioListLitle: Дизайн
список_продукции:
  - вывески
  - оформление фасадов
  - логотипы
  - резерно-гравировальные услуги
  - стеллы и доски почета
links:
---

<h1 class="main-title" id="#1">Вывески</h1>

<div class="portfolio-works">
<div class="portfolio-works__grid">
{% for viveska_design in collections.viveska_design %}
<div
class="portfolio-works__wrapper"
data-name="{{ viveska_design.data.name }}"
data-description="{{ viveska_design.data.description }}"
>
<div class="portfolio-works__img-container">
<img src="{{ viveska_design.data.img }}" alt="{{ viveska_design.data.alt }}" class="portfolio-works__img"/>
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

<h1 class="main-title" id="2">Оформление фасадов
</h1>

<div class="portfolio-works">
<div class="portfolio-works__grid2_1row">
{% for fasade in collections.fasade %}
<div
class="portfolio-works__wrapper"
data-name="{{ fasade.data.name }}"
data-description="{{ fasade.data.description }}"
>
<div class="portfolio-works__img-container">
<img src="{{ fasade.data.img }}" alt="{{ fasade.data.alt }}" class="portfolio-works__img" />
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

<h1 class="main-title" id="3">Логотипы</h1>

<div class="portfolio-works">
<div class="portfolio-works__grid3">
{% for logo in collections.logo %}
<div
class="portfolio-works__wrapper"
data-name="{{ logo.data.name }}"
data-description="{{ logo.data.description }}"
>
<div class="portfolio-works__img-container">
<img src="{{ logo.data.img }}" alt="{{ logo.data.alt }}" class="portfolio-works__img"/>
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

<h1 class="main-title" id="4">Фрезерно-гравировальные услуги
</h1>

<div class="portfolio-works">
<div class="portfolio-works__grid4">
{% for frezer in collections.frezer %}
<div
class="portfolio-works__wrapper"
data-name="{{ frezer.data.name }}"
data-description="{{ frezer.data.description }}"
>
<div class="portfolio-works__img-container">
<img src="{{ frezer.data.img }}" alt="{{ frezer.data.alt }}" class="portfolio-works__img"/>
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

<h1 class="main-title" id="5">Стеллы и Доски Почета
</h1>

<div class="portfolio-works">
<div class="portfolio-works__grid5_1row">
{% for stella in collections.stella %}
<div
class="portfolio-works__wrapper"
data-name="{{ stella.data.name }}"
data-description="{{ stella.data.description }}"
>
<div class="portfolio-works__img-container">
<img src="{{ stella.data.img }}" alt="{{ stella.data.alt }}" class="portfolio-works__img"/>
</div>
</div>
{% endfor %}
</div>
<div class="portfolio-works__description">
<p class="portfolio-works__grid5-description-title"></p>
<p class="portfolio-works__grid5-description-sub"></p>
</div>
</div>
<div class="pagination">
<a href="#5" class="pagination-prev5">Назад</a>
<div class="pagination-page">
Страница <span class="pagination-page-num5">1</span>
</div>
<a href="#5" class="pagination-next5">Вперёд</a>
</div>
