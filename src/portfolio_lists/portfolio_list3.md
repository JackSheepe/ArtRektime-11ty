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
  - https://viviski_design.html
  - https://fasade.html
  - https://logos.html
  - https://gravirovka.html
  - https://stella.html
---

<h1>Вывески</h1>

<div class="portfolio_works_container">
<div class="portfolio_works__grid">
{% for viveska_design in collections.viveska_design %}
<div
class="portfolio_works_wrapper"
data-name="{{ viveska_design.data.name }}"
data-description="{{ viveska_design.data.description }}"
>
<div class="portfolio_works_imgcontainer">
<img src="{{ viveska_design.data.img }}" alt="{{ viveska_design.data.alt }}" />
</div>
</div>
{% endfor %}
</div>
</div>
<div class="pagination">
<div class="pagination-prev">Prev</div>
<div class="pagination-page">
Page <span class="pagination-page-num">1</span>
</div>
<div class="pagination-next">Next</div>
</div>

<h1>Оформление фасадов
</h1>

<div class="portfolio_works_container">
<div class="portfolio_works__grid2__1row">
{% for fasade in collections.fasade %}
<div
class="portfolio_works_wrapper"
data-name="{{ fasade.data.name }}"
data-description="{{ fasade.data.description }}"
>
<div class="portfolio_works_imgcontainer">
<img src="{{ fasade.data.img }}" alt="{{ fasade.data.alt }}" />
</div>
</div>
{% endfor %}
</div>
</div>
<div class="pagination">
<div class="pagination-prev2">Prev</div>
<div class="pagination-page">
Page <span class="pagination-page-num2">1</span>
</div>
<div class="pagination-next2">Next</div>
</div>

<h1>Логотипы</h1>

<div class="portfolio_works_container">
<div class="portfolio_works__grid3">
{% for logo in collections.logo %}
<div
class="portfolio_works_wrapper"
data-name="{{ logo.data.name }}"
data-description="{{ logo.data.description }}"
>
<div class="portfolio_works_imgcontainer">
<img src="{{ logo.data.img }}" alt="{{ logo.data.alt }}" />
</div>
</div>
{% endfor %}
</div>
</div>
<div class="pagination">
<div class="pagination-prev3">Prev</div>
<div class="pagination-page">
Page <span class="pagination-page-num3">1</span>
</div>
<div class="pagination-next3">Next</div>
</div>

<h1>Фрезерно-гравировальные услуги
</h1>

<div class="portfolio_works_container">
<div class="portfolio_works__grid4">
{% for frezer in collections.frezer %}
<div
class="portfolio_works_wrapper"
data-name="{{ frezer.data.name }}"
data-description="{{ frezer.data.description }}"
>
<div class="portfolio_works_imgcontainer">
<img src="{{ frezer.data.img }}" alt="{{ frezer.data.alt }}" />
</div>
</div>
{% endfor %}
</div>
</div>
<div class="pagination">
<div class="pagination-prev4">Prev</div>
<div class="pagination-page">
Page <span class="pagination-page-num4">1</span>
</div>
<div class="pagination-next4">Next</div>
</div>

<h1>Стеллы и Доски Почета
</h1>

<div class="portfolio_works_container">
<div class="portfolio_works__grid5__1row">
{% for stella in collections.stella %}
<div
class="portfolio_works_wrapper"
data-name="{{ stella.data.name }}"
data-description="{{ stella.data.description }}"
>
<div class="portfolio_works_imgcontainer">
<img src="{{ stella.data.img }}" alt="{{ stella.data.alt }}" />
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
