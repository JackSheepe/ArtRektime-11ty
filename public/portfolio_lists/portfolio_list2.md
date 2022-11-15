---
title: Полиграфия
layout: ./layouts/wgallery2.html
portfolioListLitle: Полиграфия
список_продукции:
  - визитки
  - листовки
  - буклеты
  - календари
  - блокноты
  - открытки
  - конверты
  - бланки
  - упаковочная продукция
  - афиши
  - постеры
  - плакаты
links:
  - https://visitki.html
  - https://listovki.html
  - https://booklets.html
  - https://calendars.html
  - https://blocknots.html
  - https://otkritki.html
  - https://converts.html
  - https://blanks.html
  - https://upakovka.html
  - https://afisha.html
  - https://posters.html
  - https://plakat.html
---

<h1>Визитки</h1>

<div class="portfolio_works_container">
<div class="portfolio_works__grid8">
{% for visitka in collections.visitka %}
<div
class="portfolio_works_wrapper"
data-name="{{ visitka.data.name }}"
data-description="{{ visitka.data.description }}"
>
<div class="portfolio_works_imgcontainer">
<img src="{{ visitka.data.img }}" alt="{{ visitka.data.alt }}" />
</div>
</div>
{% endfor %}
</div>
</div>
<div class="pagination">
<div class="pagination-prev8">Prev</div>
<div class="pagination-page">
Page <span class="pagination-page-num8">1</span>
</div>
<div class="pagination-next8">Next</div>
</div>
