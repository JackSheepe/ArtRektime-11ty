---
title: Фрезерная резка с ЧПУ
layout: ./layouts/wgallery4.html
portfolioListLitle: Фрезерная резка с ЧПУ
список_продукции:
  - буквы
links:
---

<h1 id="1">Фрезерно-гравировальные услуги
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
<div class="portfolio_works__grid-description">
<p class="portfolio_works__grid4-description-title"></p>
<p class="portfolio_works__grid4-description-sub"></p>
</div>
</div>
<div class="pagination">
<a href="#1" class="pagination-prev4">Назад</a>
<div class="pagination-page">
Страница <span class="pagination-page-num4">1</span>
</div>
<a href="#1" class="pagination-next4">Вперёд</a>
</div>
