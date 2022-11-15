---
title: ТАБЛИЧКИ И СТЕНДЫ
titleLink: /stands/index.html
image: /assets/img/icons/stands.png
alt: пример стендов
text: навигация выставочные стенды
list:
  - офисные таблички
  - информационные стенды
  - уголок покупателя
  - режимы работы
  - адресные таблички
links:
  - https://stands_office.html
  - https://stands_info.html
  - https://stands_cornerOfClient.html
  - https://stands_workHours.html
  - https://stands_adress.html
---

<article class="forClient">
  <h1 class="greyBackground">Таблички и стенды</h1>
  {% for Table in collections.Table %}
  <div class="columnsWimageNlinks">
    <div class="columnsWimageNlinks_title">
      <a href="{{ Table.url }}"> <h1>{{ Table.data.title }}</h1></a>
    </div>
    <div class="columnsWimageNlinks_links">
      <p class="portfolio_jobs">{{ Table.data.text }}</p>
    </div>
    <div class="columnsWimageNlinks_linebox">
      <div class="columnsWimageNlinks_linebox_line"></div>
    </div>
    <div class="columnsWimageNlinks_linebox2">
      <div class="columnsWimageNlinks_linebox_line"></div>
    </div>
    <div class="columnsWimageNlinks_image">
      <img src="{{ Table.data.image }}" alt="{{ Table.data.alt }}" />
    </div>
  </div>
  {% endfor %}
</article>
