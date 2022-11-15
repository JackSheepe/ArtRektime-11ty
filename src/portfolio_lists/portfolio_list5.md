---
title: Фрезерная резка с ЧПУ
layout: ./layouts/wgallery4.html
portfolioListLitle: Фрезерная резка с ЧПУ
список_продукции:
  - буквы
links:
  - https://letters.html
---

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
