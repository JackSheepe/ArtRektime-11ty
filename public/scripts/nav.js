/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "firstHeader") {
    x.className += " responsive";
  } else {
    x.className = "firstHeader";
  }
}

let loc = document.getElementsByClassName("portfolio_works_wrapper");

for (var i = 0; i < loc.length; i++) {
  loc[i].addEventListener("mouseover", locOver);
  loc[i].addEventListener("mouseout", locOut);
}

var descript = null;
var title = null;

function locOver(event) {
  descript = event.currentTarget.getAttribute("data-description");
  title = event.currentTarget.getAttribute("data-name");
  document.documentElement.style.setProperty(
    "--gallery-description",
    "'" + descript + "'"
  );
  document.documentElement.style.setProperty(
    "--gallery-title",
    "'" + title + "'"
  );

  if (
    event.currentTarget.parentElement?.classList.contains(
      "portfolio_works__grid2__1row"
    ) === true
  ) {
    document.documentElement.style.setProperty("--gallery-description", "' '");
    document.documentElement.style.setProperty("--gallery-title", "' '");
    document.documentElement.style.setProperty("--gallery-description3", "' '");
    document.documentElement.style.setProperty("--gallery-title3", "' '");
    document.documentElement.style.setProperty("--gallery-description4", "' '");
    document.documentElement.style.setProperty("--gallery-title4", "' '");
    document.documentElement.style.setProperty("--gallery-description5", "' '");
    document.documentElement.style.setProperty("--gallery-title5", "' '");
    document.documentElement.style.setProperty("--gallery-description6", "' '");
    document.documentElement.style.setProperty("--gallery-title6", "' '");
    document.documentElement.style.setProperty("--gallery-description7", "' '");
    document.documentElement.style.setProperty("--gallery-title7", "' '");
    document.documentElement.style.setProperty(
      "--gallery-description2",
      "'" + descript + "'"
    );
    document.documentElement.style.setProperty(
      "--gallery-title2",
      "'" + title + "'"
    );
  }

  if (
    event.currentTarget.parentElement?.classList.contains(
      "portfolio_works__grid3"
    ) === true
  ) {
    document.documentElement.style.setProperty("--gallery-description", "' '");
    document.documentElement.style.setProperty("--gallery-title", "' '");
    document.documentElement.style.setProperty("--gallery-description2", "' '");
    document.documentElement.style.setProperty("--gallery-title2", "' '");
    document.documentElement.style.setProperty("--gallery-description4", "' '");
    document.documentElement.style.setProperty("--gallery-title4", "' '");
    document.documentElement.style.setProperty("--gallery-description5", "' '");
    document.documentElement.style.setProperty("--gallery-title5", "' '");
    document.documentElement.style.setProperty("--gallery-description6", "' '");
    document.documentElement.style.setProperty("--gallery-title6", "' '");
    document.documentElement.style.setProperty("--gallery-description7", "' '");
    document.documentElement.style.setProperty("--gallery-title7", "' '");
    document.documentElement.style.setProperty(
      "--gallery-description3",
      "'" + descript + "'"
    );
    document.documentElement.style.setProperty(
      "--gallery-title3",
      "'" + title + "'"
    );
  }

  if (
    event.currentTarget.parentElement?.classList.contains(
      "portfolio_works__grid4"
    ) === true
  ) {
    document.documentElement.style.setProperty("--gallery-description", "' '");
    document.documentElement.style.setProperty("--gallery-title", "' '");
    document.documentElement.style.setProperty("--gallery-description2", "' '");
    document.documentElement.style.setProperty("--gallery-title2", "' '");
    document.documentElement.style.setProperty("--gallery-description3", "' '");
    document.documentElement.style.setProperty("--gallery-title3", "' '");
    document.documentElement.style.setProperty("--gallery-description5", "' '");
    document.documentElement.style.setProperty("--gallery-title5", "' '");
    document.documentElement.style.setProperty("--gallery-description6", "' '");
    document.documentElement.style.setProperty("--gallery-title6", "' '");
    document.documentElement.style.setProperty("--gallery-description7", "' '");
    document.documentElement.style.setProperty("--gallery-title7", "' '");
    document.documentElement.style.setProperty(
      "--gallery-description4",
      "'" + descript + "'"
    );
    document.documentElement.style.setProperty(
      "--gallery-title4",
      "'" + title + "'"
    );
  }

  if (
    event.currentTarget.parentElement?.classList.contains(
      "portfolio_works__grid5__1row"
    ) === true
  ) {
    document.documentElement.style.setProperty("--gallery-description", "' '");
    document.documentElement.style.setProperty("--gallery-title", "' '");
    document.documentElement.style.setProperty("--gallery-description2", "' '");
    document.documentElement.style.setProperty("--gallery-title2", "' '");
    document.documentElement.style.setProperty("--gallery-description3", "' '");
    document.documentElement.style.setProperty("--gallery-title3", "' '");
    document.documentElement.style.setProperty("--gallery-description4", "' '");
    document.documentElement.style.setProperty("--gallery-title4", "' '");
    document.documentElement.style.setProperty("--gallery-description6", "' '");
    document.documentElement.style.setProperty("--gallery-title6", "' '");
    document.documentElement.style.setProperty("--gallery-description7", "' '");
    document.documentElement.style.setProperty("--gallery-title7", "' '");
    document.documentElement.style.setProperty(
      "--gallery-description5",
      "'" + descript + "'"
    );
    document.documentElement.style.setProperty(
      "--gallery-title5",
      "'" + title + "'"
    );
  }

  if (
    event.currentTarget.parentElement?.classList.contains(
      "portfolio_works__grid6__1row"
    ) === true
  ) {
    document.documentElement.style.setProperty("--gallery-description", "' '");
    document.documentElement.style.setProperty("--gallery-title", "' '");
    document.documentElement.style.setProperty("--gallery-description2", "' '");
    document.documentElement.style.setProperty("--gallery-title2", "' '");
    document.documentElement.style.setProperty("--gallery-description3", "' '");
    document.documentElement.style.setProperty("--gallery-title3", "' '");
    document.documentElement.style.setProperty("--gallery-description4", "' '");
    document.documentElement.style.setProperty("--gallery-title4", "' '");
    document.documentElement.style.setProperty("--gallery-description5", "' '");
    document.documentElement.style.setProperty("--gallery-title5", "' '");
    document.documentElement.style.setProperty("--gallery-description7", "' '");
    document.documentElement.style.setProperty("--gallery-title7", "' '");
    document.documentElement.style.setProperty(
      "--gallery-description6",
      "'" + descript + "'"
    );
    document.documentElement.style.setProperty(
      "--gallery-title6",
      "'" + title + "'"
    );
  }

  if (
    event.currentTarget.parentElement?.classList.contains(
      "portfolio_works__grid7__1row"
    ) === true
  ) {
    document.documentElement.style.setProperty("--gallery-description", "' '");
    document.documentElement.style.setProperty("--gallery-title", "' '");
    document.documentElement.style.setProperty("--gallery-description2", "' '");
    document.documentElement.style.setProperty("--gallery-title2", "' '");
    document.documentElement.style.setProperty("--gallery-description3", "' '");
    document.documentElement.style.setProperty("--gallery-title3", "' '");
    document.documentElement.style.setProperty("--gallery-description4", "' '");
    document.documentElement.style.setProperty("--gallery-title4", "' '");
    document.documentElement.style.setProperty("--gallery-description5", "' '");
    document.documentElement.style.setProperty("--gallery-title5", "' '");
    document.documentElement.style.setProperty("--gallery-description6", "' '");
    document.documentElement.style.setProperty("--gallery-title6", "' '");
    document.documentElement.style.setProperty(
      "--gallery-description7",
      "'" + descript + "'"
    );
    document.documentElement.style.setProperty(
      "--gallery-title7",
      "'" + title + "'"
    );
  }
}

function locOut() {
  document.documentElement.style.setProperty("--gallery-description", "' '");
  document.documentElement.style.setProperty("--gallery-title", "' '");
  document.documentElement.style.setProperty("--gallery-description2", "' '");
  document.documentElement.style.setProperty("--gallery-title2", "' '");
  document.documentElement.style.setProperty("--gallery-description3", "' '");
  document.documentElement.style.setProperty("--gallery-title3", "' '");
  document.documentElement.style.setProperty("--gallery-description4", "' '");
  document.documentElement.style.setProperty("--gallery-title4", "' '");
  document.documentElement.style.setProperty("--gallery-description5", "' '");
  document.documentElement.style.setProperty("--gallery-title5", "' '");
  document.documentElement.style.setProperty("--gallery-description6", "' '");
  document.documentElement.style.setProperty("--gallery-title6", "' '");
  document.documentElement.style.setProperty("--gallery-description7", "' '");
  document.documentElement.style.setProperty("--gallery-title7", "' '");
}

// open image

let galleryImages = document.querySelectorAll(".portfolio_works_imgcontainer");
let getLatesOpenedImg;
let windowWidth = window.innerWidth;

if (galleryImages) {
  galleryImages.forEach(function (image, index) {
    image.onclick = function () {
      let getImage = document.querySelectorAll(
        ".portfolio_works_imgcontainer img"
      )[index].src;
      console.log(getImage);
      let getImgSrcPos = getImage.split("/assets/img/pic/");
      let setNewImgSrc = getImgSrcPos[1].replace('")', "");

      getLatesOpenedImg = index;

      let container = document.body;
      let newImgWindow = document.createElement("div");
      container.appendChild(newImgWindow);
      newImgWindow.setAttribute("class", "img-window");
      newImgWindow.setAttribute("onclick", "closeImg()");

      let newImgContainer = document.createElement("div");
      newImgWindow.appendChild(newImgContainer);
      newImgContainer.setAttribute("class", "img-window-container");

      let newImg = document.createElement("img");
      newImgContainer.appendChild(newImg);
      newImg.setAttribute("src", "/assets/img/pic/" + setNewImgSrc);
      newImg.setAttribute("id", "current-img");

      let textname = document.createElement("p");
      textname.innerHTML = title;
      newImgContainer.appendChild(textname);
      textname.setAttribute("class", "img-name");

      let textdescription = document.createElement("p");
      textdescription.innerHTML = descript;
      newImgContainer.appendChild(textdescription);
      textdescription.setAttribute("class", "img-description");

      newImg.onload = function () {
        let imgWidth = this.width;
        // let calcImgToEdge = (windowWidth - imgWidth) / 2 - 80;

        let newNextBtn = document.createElement("a");
        let btnNextText = document.createTextNode("Next");
        newNextBtn.appendChild(btnNextText);
        container.appendChild(newNextBtn);
        newNextBtn.setAttribute("class", "img-btn-next");
        newNextBtn.setAttribute("onclick", "changeImg(1)");
        // newNextBtn.style.cssText = "right: " + calcImgToEdge + "px;";

        let newPrevBtn = document.createElement("a");
        let btnPrevText = document.createTextNode("Prev");
        newPrevBtn.appendChild(btnPrevText);
        container.appendChild(newPrevBtn);
        newPrevBtn.setAttribute("class", "img-btn-prev");
        newPrevBtn.setAttribute("onclick", "changeImg(0)");
        // newPrevBtn.style.cssText = "left: " + calcImgToEdge + "px;";
      };
    };
  });
}

function closeImg() {
  document.querySelector(".img-window").remove();
  document.querySelector(".img-btn-next").remove();
  document.querySelector(".img-btn-prev").remove();
}

function changeImg(changeDir) {
  document.querySelector("#current-img").remove();

  let getImgWindow = document.querySelector(".img-window");
  let getImgWindowConatainer = document.querySelector(".img-window-container");
  let newImg = document.createElement("img");
  let gettextdescription = document.querySelector(".img-description");
  let gettextname = document.querySelector(".img-name");
  getImgWindow.appendChild(getImgWindowConatainer);
  getImgWindowConatainer.appendChild(newImg);
  getImgWindowConatainer.appendChild(gettextname);
  getImgWindowConatainer.appendChild(gettextdescription);

  let calcNewImg;
  if (changeDir === 1) {
    calcNewImg = getLatesOpenedImg + 1;
    if (calcNewImg >= galleryImages.length) {
      calcNewImg = 0;
    }
  } else if (changeDir === 0) {
    calcNewImg = getLatesOpenedImg - 1;
    if (calcNewImg < 1) {
      calcNewImg = galleryImages.length;
    }
  }

  newImg.setAttribute(
    "src",
    document.querySelectorAll(".portfolio_works_imgcontainer img")[calcNewImg]
      .src
  );
  newImg.setAttribute("id", "current-img");

  gettextname.innerHTML = document.querySelectorAll(".portfolio_works_wrapper")[
    calcNewImg
  ].dataset.name;

  gettextdescription.innerHTML = document.querySelectorAll(
    ".portfolio_works_wrapper"
  )[calcNewImg].dataset.description;

  console.log(newImg.dataset.name);

  getLatesOpenedImg = calcNewImg;
}

// pagination

let paginationGalleryItems = document.querySelector(
  ".portfolio_works__grid"
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
  ".portfolio_works__grid2__1row"
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
  ".portfolio_works__grid3"
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

let paginationGalleryItems5 = document.querySelector(
  ".portfolio_works__grid5__1row"
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
  ".portfolio_works__grid6__1row"
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
  ".portfolio_works__grid7__1row"
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

window.onload = function () {
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
};
