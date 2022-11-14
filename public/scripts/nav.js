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
      "portfolio_works__grid8"
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
      "--gallery-description8",
      "'" + descript + "'"
    );
    document.documentElement.style.setProperty(
      "--gallery-title8",
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
  document.documentElement.style.setProperty("--gallery-description8", "' '");
  document.documentElement.style.setProperty("--gallery-title8", "' '");
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
