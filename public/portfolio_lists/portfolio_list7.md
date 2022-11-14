---
layout: ./layouts/wgallery6.html
portfolioListLitle: Отделка фасадов и входных групп
список_продукции:
  - АЗС
  - входные группы
links:
  - https://azs.html
  - https://enteringGroups.html
---

<h1>Комплексное оформление
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
<div class="pagination">
<div class="pagination-prev4">Prev</div>
<div class="pagination-page">
Page <span class="pagination-page-num4">1</span>
</div>
<div class="pagination-next4">Next</div>
</div>

<h1>Входные группы
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
</div>
<div class="pagination">
<div class="pagination-prev5">Prev</div>
<div class="pagination-page">
Page <span class="pagination-page-num5">1</span>
</div>
<div class="pagination-next5">Next</div>
</div>
