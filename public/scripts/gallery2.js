let paginationGalleryItems8 = document.querySelector(
  ".portfolio-works__grid8"
).children;
console.log(paginationGalleryItems8);
const paginationPrev8 = document.querySelector(".pagination-prev8");
const paginationNext8 = document.querySelector(".pagination-next8");
const paginationPage8 = document.querySelector(".pagination-page-num8");
const paginationMaxItem8 = 10;
let paginationIndex8 = 1;

const pagination8 = Math.ceil(
  paginationGalleryItems8.length / paginationMaxItem8
);
console.log(pagination8);

paginationPrev8.addEventListener("click", function () {
  paginationIndex8--;
  check8();
  showItems8();
});
paginationNext8.addEventListener("click", function () {
  paginationIndex8++;
  check8();
  showItems8();
});

function check8() {
  if (paginationIndex8 == pagination8) {
    paginationNext8.classList.add("disabled");
  } else {
    paginationNext8.classList.remove("disabled");
  }

  if (paginationIndex8 == 1) {
    paginationPrev8.classList.add("disabled");
  } else {
    paginationPrev8.classList.remove("disabled");
  }
}

function showItems8() {
  for (let i = 0; i < paginationGalleryItems8.length; i++) {
    paginationGalleryItems8[i].classList.remove("show");
    paginationGalleryItems8[i].classList.add("hide");

    if (
      i >= paginationIndex8 * paginationMaxItem8 - paginationMaxItem8 &&
      i < paginationIndex8 * paginationMaxItem8
    ) {
      // if i greater than and equal to (index*maxItem)-maxItem;
      // means  (1*8)-8=0 if index=2 then (2*8)-8=8
      paginationGalleryItems8[i].classList.remove("hide");
      paginationGalleryItems8[i].classList.add("show");
    }
    paginationPage8.innerHTML = paginationIndex8;
  }
}

showItems8();
check8();
