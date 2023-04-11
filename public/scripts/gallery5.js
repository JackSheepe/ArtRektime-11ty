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

showItems5();
check5();
