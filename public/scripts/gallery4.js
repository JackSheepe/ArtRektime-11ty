let paginationGalleryItems4 = document.querySelector(
  ".portfolio_works__grid4"
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

showItems4();
check4();
