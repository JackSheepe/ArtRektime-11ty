---
layout: ./layouts/wgallery1.html
portfolioListLitle: Наружная реклама
список_продукции:
  - вывески
  - лайтбоксы
  - буквы и элементы
  - таблички
  - стенды, штендеры и рекламные конструкции
  - пожарная безопасность
  - плоттерная резка
links:
---

<h1>Вывески</h1>

<div class="portfolio_works_container">
<div class="portfolio_works__grid">
{% for viveska in collections.viveska %}
<div
class="portfolio_works_wrapper"
data-name="{{ viveska.data.name }}"
data-description="{{ viveska.data.description }}"
>
<div class="portfolio_works_imgcontainer">
<img src="{{ viveska.data.img }}" alt="{{ viveska.data.alt }}" />
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

<h1>Лайтбоксы</h1>
<div class="portfolio_works_container">
<div class="portfolio_works__grid2__1row">
{% for lightbox in collections.lightbox %}
<div
class="portfolio_works_wrapper"
data-name="{{ lightbox.data.name }}"
data-description="{{ lightbox.data.description }}"
>
<div class="portfolio_works_imgcontainer">
<img src="{{ lightbox.data.img }}" alt="{{ lightbox.data.alt }}" />
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

<h1>Таблички</h1>

<div class="portfolio_works_container">
<div class="portfolio_works__grid3">
{% for table in collections.table %}
<div
class="portfolio_works_wrapper"
data-name="{{ table.data.name }}"
data-description="{{ table.data.description }}"
>
<div class="portfolio_works_imgcontainer">
<img src="{{ table.data.img }}" alt="{{ table.data.alt }}" />
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

<h1>Стенды</h1>

<div class="portfolio_works_container">
<div class="portfolio_works__grid4">
{% for stand in collections.stand %}
<div
class="portfolio_works_wrapper"
data-name="{{ stand.data.name }}"
data-description="{{ stand.data.description }}"
>
<div class="portfolio_works_imgcontainer">
<img src="{{ stand.data.img }}" alt="{{ stand.data.alt }}" />
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

<h1>Штендеры и рекламные конструкции</h1>
<div class="portfolio_works_container">
<div class="portfolio_works__grid5__1row">
{% for shtender in collections.shtender %}
<div
class="portfolio_works_wrapper"
data-name="{{ shtender.data.name }}"
data-description="{{ shtender.data.description }}"
>
<div class="portfolio_works_imgcontainer">
<img src="{{ shtender.data.img }}" alt="{{ shtender.data.alt }}" />
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

<h1>Пожарная безопасность</h1>
<div class="portfolio_works_container">
<div class="portfolio_works__grid6__1row">
{% for fireSafety in collections.fireSafety %}
<div
class="portfolio_works_wrapper"
data-name="{{ fireSafety.data.name }}"
data-description="{{ fireSafety.data.description }}"
>
<div class="portfolio_works_imgcontainer">
<img src="{{ fireSafety.data.img }}" alt="{{ fireSafety.data.alt }}" />
</div>
</div>
{% endfor %}
</div>
</div>
<div class="pagination">
<div class="pagination-prev6">Prev</div>
<div class="pagination-page">
Page <span class="pagination-page-num6">1</span>
</div>
<div class="pagination-next6">Next</div>
</div>

<h1>Плоттерная резка и наклейки</h1>
<div class="portfolio_works_container">
<div class="portfolio_works__grid7__1row">
{% for plotter in collections.plotter %}
<div
class="portfolio_works_wrapper"
data-name="{{ plotter.data.name }}"
data-description="{{ plotter.data.description }}"
>
<div class="portfolio_works_imgcontainer">
<img src="{{ plotter.data.img }}" alt="{{ plotter.data.alt }}" />
</div>
</div>
{% endfor %}
</div>
</div>
<div class="pagination">
<div class="pagination-prev7">Prev</div>
<div class="pagination-page">
Page <span class="pagination-page-num7">1</span>
</div>
<div class="pagination-next7">Next</div>
</div>
