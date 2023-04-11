---
title: Фрезерная резка с ЧПУ
layout: ./layouts/wgallery4.html
portfolioListLitle: Фрезерная резка с ЧПУ
список_продукции:
  - буквы
links:
---

<h1 class="main-title" id="1">Фрезерно-гравировальные услуги
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
<a href="#1" class="pagination-prev4">Назад</a>
<div class="pagination-page">
Страница <span class="pagination-page-num4">1</span>
</div>
<a href="#1" class="pagination-next4">Вперёд</a>
</div>
