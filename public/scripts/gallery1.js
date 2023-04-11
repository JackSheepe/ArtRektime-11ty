// pagination

let paginationGalleryItems = document.querySelector(
  ".portfolio-works__grid"
).children;
console.log(paginationGalleryItems);
const paginationPrev = document.querySelector(".pagination-prev");
const paginationNext = document.querySelector(".pagination-next");
const paginationPage = document.querySelector(".pagination-page-num");
const paginationMaxItem = 10;
let paginationIndex = 1;

const pagination = Math.ceil(paginationGalleryItems.length / paginationMaxItem);
console.log(pagination);

paginationPrev.addEventListener("click", function () {
  paginationIndex--;
  check();
  showItems();
});
paginationNext.addEventListener("click", function () {
  paginationIndex++;
  check();
  showItems();
});

function check() {
  if (paginationIndex == pagination) {
    paginationNext.classList.add("disabled");
  } else {
    paginationNext.classList.remove("disabled");
  }

  if (paginationIndex == 1) {
    paginationPrev.classList.add("disabled");
  } else {
    paginationPrev.classList.remove("disabled");
  }
}

function showItems() {
  for (let i = 0; i < paginationGalleryItems.length; i++) {
    paginationGalleryItems[i].classList.remove("show");
    paginationGalleryItems[i].classList.add("hide");

    if (
      i >= paginationIndex * paginationMaxItem - paginationMaxItem &&
      i < paginationIndex * paginationMaxItem
    ) {
      // if i greater than and equal to (index*maxItem)-maxItem;
      // means  (1*8)-8=0 if index=2 then (2*8)-8=8
      paginationGalleryItems[i].classList.remove("hide");
      paginationGalleryItems[i].classList.add("show");
    }
    paginationPage.innerHTML = paginationIndex;
  }
}

let paginationGalleryItems2 = document.querySelector(
  ".portfolio-works__grid2_1row"
).children;
console.log(paginationGalleryItems2);
const paginationPrev2 = document.querySelector(".pagination-prev2");
const paginationNext2 = document.querySelector(".pagination-next2");
const paginationPage2 = document.querySelector(".pagination-page-num2");
const paginationMaxItem2 = 5;
let paginationIndex2 = 1;

const pagination2 = Math.ceil(
  paginationGalleryItems2.length / paginationMaxItem2
);
console.log(pagination2);

paginationPrev2.addEventListener("click", function () {
  paginationIndex2--;
  check2();
  showItems2();
});
paginationNext2.addEventListener("click", function () {
  paginationIndex2++;
  check2();
  showItems2();
});

function check2() {
  if (paginationIndex2 == pagination2) {
    paginationNext2.classList.add("disabled");
  } else {
    paginationNext2.classList.remove("disabled");
  }

  if (paginationIndex2 == 1) {
    paginationPrev2.classList.add("disabled");
  } else {
    paginationPrev2.classList.remove("disabled");
  }
}

function showItems2() {
  for (let i = 0; i < paginationGalleryItems2.length; i++) {
    paginationGalleryItems2[i].classList.remove("show");
    paginationGalleryItems2[i].classList.add("hide");

    if (
      i >= paginationIndex2 * paginationMaxItem2 - paginationMaxItem2 &&
      i < paginationIndex2 * paginationMaxItem2
    ) {
      // if i greater than and equal to (index*maxItem)-maxItem;
      // means  (1*8)-8=0 if index=2 then (2*8)-8=8
      paginationGalleryItems2[i].classList.remove("hide");
      paginationGalleryItems2[i].classList.add("show");
    }
    paginationPage2.innerHTML = paginationIndex2;
  }
}

let paginationGalleryItems3 = document.querySelector(
  ".portfolio-works__grid3"
).children;
console.log(paginationGalleryItems3);
const paginationPrev3 = document.querySelector(".pagination-prev3");
const paginationNext3 = document.querySelector(".pagination-next3");
const paginationPage3 = document.querySelector(".pagination-page-num3");
const paginationMaxItem3 = 10;
let paginationIndex3 = 1;

const pagination3 = Math.ceil(
  paginationGalleryItems3.length / paginationMaxItem3
);
console.log(pagination3);

paginationPrev3.addEventListener("click", function () {
  paginationIndex3--;
  check3();
  showItems3();
});
paginationNext3.addEventListener("click", function () {
  paginationIndex3++;
  check3();
  showItems3();
});

function check3() {
  if (paginationIndex3 == pagination3) {
    paginationNext3.classList.add("disabled");
  } else {
    paginationNext3.classList.remove("disabled");
  }

  if (paginationIndex3 == 1) {
    paginationPrev3.classList.add("disabled");
  } else {
    paginationPrev3.classList.remove("disabled");
  }
}

function showItems3() {
  for (let i = 0; i < paginationGalleryItems3.length; i++) {
    paginationGalleryItems3[i].classList.remove("show");
    paginationGalleryItems3[i].classList.add("hide");

    if (
      i >= paginationIndex3 * paginationMaxItem3 - paginationMaxItem3 &&
      i < paginationIndex3 * paginationMaxItem3
    ) {
      // if i greater than and equal to (index*maxItem)-maxItem;
      // means  (1*8)-8=0 if index=2 then (2*8)-8=8
      paginationGalleryItems3[i].classList.remove("hide");
      paginationGalleryItems3[i].classList.add("show");
    }
    paginationPage3.innerHTML = paginationIndex3;
  }
}

let paginationGalleryItems4 = document.querySelector(
  ".portfolio-works__grid4"
).children;
console.log(paginationGalleryItems4);
const paginationPrev4 = document.querySelector(".pagination-prev4");
const paginationNext4 = document.querySelector(".pagination-next4");
const paginationPage4 = document.querySelector(".pagination-page-num4");
const paginationMaxItem4 = 10;
let paginationIndex4 = 1;

const pagination4 = Math.ceil(
  paginationGalleryItems4.length / paginationMaxItem4
);
console.log(pagination4);

paginationPrev4.addEventListener("click", function () {
  paginationIndex4--;
  check4();
  showItems4();
});
paginationNext4.addEventListener("click", function () {
  paginationIndex4++;
  check4();
  showItems4();
});

function check4() {
  if (paginationIndex4 == pagination4) {
    paginationNext4.classList.add("disabled");
  } else {
    paginationNext4.classList.remove("disabled");
  }

  if (paginationIndex4 == 1) {
    paginationPrev4.classList.add("disabled");
  } else {
    paginationPrev4.classList.remove("disabled");
  }
}

function showItems4() {
  for (let i = 0; i < paginationGalleryItems4.length; i++) {
    paginationGalleryItems4[i].classList.remove("show");
    paginationGalleryItems4[i].classList.add("hide");

    if (
      i >= paginationIndex4 * paginationMaxItem4 - paginationMaxItem4 &&
      i < paginationIndex4 * paginationMaxItem4
    ) {
      // if i greater than and equal to (index*maxItem)-maxItem;
      // means  (1*8)-8=0 if index=2 then (2*8)-8=8
      paginationGalleryItems4[i].classList.remove("hide");
      paginationGalleryItems4[i].classList.add("show");
    }
    paginationPage4.innerHTML = paginationIndex4;
  }
}

let paginationGalleryItems5 = document.querySelector(
  ".portfolio-works__grid5_1row"
).children;
console.log(paginationGalleryItems5);
const paginationPrev5 = document.querySelector(".pagination-prev5");
const paginationNext5 = document.querySelector(".pagination-next5");
const paginationPage5 = document.querySelector(".pagination-page-num5");
const paginationMaxItem5 = 5;
let paginationIndex5 = 1;

const pagination5 = Math.ceil(
  paginationGalleryItems5.length / paginationMaxItem5
);
console.log(pagination5);

paginationPrev5.addEventListener("click", function () {
  paginationIndex5--;
  check5();
  showItems5();
});
paginationNext5.addEventListener("click", function () {
  paginationIndex5++;
  check5();
  showItems5();
});

function check5() {
  if (paginationIndex5 == pagination5) {
    paginationNext5.classList.add("disabled");
  } else {
    paginationNext5.classList.remove("disabled");
  }

  if (paginationIndex5 == 1) {
    paginationPrev5.classList.add("disabled");
  } else {
    paginationPrev5.classList.remove("disabled");
  }
}

function showItems5() {
  for (let i = 0; i < paginationGalleryItems5.length; i++) {
    paginationGalleryItems5[i].classList.remove("show");
    paginationGalleryItems5[i].classList.add("hide");

    if (
      i >= paginationIndex5 * paginationMaxItem5 - paginationMaxItem5 &&
      i < paginationIndex5 * paginationMaxItem5
    ) {
      // if i greater than and equal to (index*maxItem)-maxItem;
      // means  (1*8)-8=0 if index=2 then (2*8)-8=8
      paginationGalleryItems5[i].classList.remove("hide");
      paginationGalleryItems5[i].classList.add("show");
    }
    paginationPage5.innerHTML = paginationIndex5;
  }
}

let paginationGalleryItems6 = document.querySelector(
  ".portfolio-works__grid6_1row"
).children;
console.log(paginationGalleryItems6);
const paginationPrev6 = document.querySelector(".pagination-prev6");
const paginationNext6 = document.querySelector(".pagination-next6");
const paginationPage6 = document.querySelector(".pagination-page-num6");
const paginationMaxItem6 = 5;
let paginationIndex6 = 1;

const pagination6 = Math.ceil(
  paginationGalleryItems6.length / paginationMaxItem6
);
console.log(pagination6);

paginationPrev6.addEventListener("click", function () {
  paginationIndex6--;
  check6();
  showItems6();
});
paginationNext6.addEventListener("click", function () {
  paginationIndex6++;
  check6();
  showItems6();
});

function check6() {
  if (paginationIndex6 == pagination6) {
    paginationNext6.classList.add("disabled");
  } else {
    paginationNext6.classList.remove("disabled");
  }

  if (paginationIndex6 == 1) {
    paginationPrev6.classList.add("disabled");
  } else {
    paginationPrev6.classList.remove("disabled");
  }
}

function showItems6() {
  for (let i = 0; i < paginationGalleryItems6.length; i++) {
    paginationGalleryItems6[i].classList.remove("show");
    paginationGalleryItems6[i].classList.add("hide");

    if (
      i >= paginationIndex6 * paginationMaxItem6 - paginationMaxItem6 &&
      i < paginationIndex6 * paginationMaxItem6
    ) {
      // if i greater than and equal to (index*maxItem)-maxItem;
      // means  (1*8)-8=0 if index=2 then (2*8)-8=8
      paginationGalleryItems6[i].classList.remove("hide");
      paginationGalleryItems6[i].classList.add("show");
    }
    paginationPage6.innerHTML = paginationIndex6;
  }
}

let paginationGalleryItems7 = document.querySelector(
  ".portfolio-works__grid7_1row"
).children;
console.log(paginationGalleryItems6);
const paginationPrev7 = document.querySelector(".pagination-prev7");
const paginationNext7 = document.querySelector(".pagination-next7");
const paginationPage7 = document.querySelector(".pagination-page-num7");
const paginationMaxItem7 = 5;
let paginationIndex7 = 1;

const pagination7 = Math.ceil(
  paginationGalleryItems7.length / paginationMaxItem7
);
console.log(pagination7);

paginationPrev7.addEventListener("click", function () {
  paginationIndex7--;
  check7();
  showItems7();
});
paginationNext7.addEventListener("click", function () {
  paginationIndex7++;
  check7();
  showItems7();
});

function check7() {
  if (paginationIndex7 == pagination7) {
    paginationNext7.classList.add("disabled");
  } else {
    paginationNext7.classList.remove("disabled");
  }

  if (paginationIndex7 == 1) {
    paginationPrev7.classList.add("disabled");
  } else {
    paginationPrev7.classList.remove("disabled");
  }
}

function showItems7() {
  for (let i = 0; i < paginationGalleryItems7.length; i++) {
    paginationGalleryItems7[i].classList.remove("show");
    paginationGalleryItems7[i].classList.add("hide");

    if (
      i >= paginationIndex7 * paginationMaxItem7 - paginationMaxItem7 &&
      i < paginationIndex7 * paginationMaxItem7
    ) {
      // if i greater than and equal to (index*maxItem)-maxItem;
      // means  (1*8)-8=0 if index=2 then (2*8)-8=8
      paginationGalleryItems7[i].classList.remove("hide");
      paginationGalleryItems7[i].classList.add("show");
    }
    paginationPage7.innerHTML = paginationIndex7;
  }
}

showItems();
check();
showItems2();
check2();
showItems3();
check3();
showItems4();
check4();
showItems5();
check5();
showItems6();
check6();
showItems7();
check7();
