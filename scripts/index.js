//GLOBAL SCOPE
const root = document.querySelector(".root");
const footer = document.querySelector(".footer");
const headerMobile = document.querySelector(".header_type_mobile");
const headerDesktop = document.querySelector(".header_type_desktop");
const paragraphs = document.querySelectorAll("p");
const motivationCaptionAccent = document.querySelector(
  ".motivation__quote-caption-accent"
);

const menuBtn = document.querySelector(".header__menu-btn");
const mobileMenu = document.querySelector(".header__mobile-menu");
const menuMiddleLine = document.querySelector(".header__menu-btnMiddleLine");
const mobileMenuItems = mobileMenu.querySelectorAll(".header__menu-item");

const cyclingWrapper = document.querySelector(".kinds-of-cycling-wrapper");
const kindsCycling = cyclingWrapper.querySelectorAll(".kinds-of-cycling");
const kindsCyclingPrevBtns = cyclingWrapper.querySelectorAll(
  ".kinds-of-cycling__btn_prev"
);
const kindsCyclingNextBtns = cyclingWrapper.querySelectorAll(
  ".kinds-of-cycling__btn_next"
);

const bikes = document.querySelector(".bikes");
const bikesMenu = bikes.querySelector(".bikes__menu");
const bikesMenuItems = bikesMenu.querySelectorAll(".bikes__menu-item");
const bikesArrowBtn = bikes.querySelector(".bikes__arrow-btn");
const bikesMenuItemsBtn = bikesMenu.querySelectorAll(".bikes__menu-item-btn");

const bikesGridWrapper = bikes.querySelector(".bikes__grid-wrapper");
const cardsContainer = bikesGridWrapper.querySelectorAll(
  ".bikes__cards-container"
);
const bikesMobileChooseContainer = bikesGridWrapper.querySelectorAll(
  ".bikes__mobile-choose-container"
);

const mobileChooseRoad = bikesMobileChooseContainer[0].querySelectorAll(
  ".bikes__mobile-choose"
);
const mobileChooseGravel = bikesMobileChooseContainer[1].querySelectorAll(
  ".bikes__mobile-choose"
);
const mobileChooseTT = bikesMobileChooseContainer[2].querySelectorAll(
  ".bikes__mobile-choose"
);

const bikesLinkRoad = cardsContainer[0].querySelectorAll(".bikes__link");
const bikesLinkGravel = cardsContainer[1].querySelectorAll(".bikes__link");
const bikesLinkTT = cardsContainer[2].querySelectorAll(".bikes__link");

const themeMobile = document.querySelector('#switch');
const themeFooter = document.querySelector("#switch_footer");
const inputEmail = document.querySelector(".footer__email");
const submitEmailBtn = document.querySelector(".footer__submit-btn");
const submitForm = document.querySelector(".footer__form");


//functions

const closeMenu = (menu) => {
  menu.classList.add("header__mobile-menu_hidden");
  menuBtn.style.borderTop = "3px solid #151515";
  menuBtn.style.borderBottom = "3px solid #151515";
  menuMiddleLine.style.borderTop = "3px solid #151515";
  menuBtn.style.backgroundImage = "none";
};

const openMenu = (menu) => {
  menuBtn.style.borderTop = "0 solid #151515";
  menuBtn.style.borderBottom = "0 solid #151515";
  menuMiddleLine.style.borderTop = "0 solid #151515";
  menuBtn.style.backgroundImage = "url('./images/UI KIT menu-closeBtn.svg')";
  menu.classList.remove("header__mobile-menu_hidden");
};

const addHidden = (elem, cls) => {
  elem.classList.add(cls);
};

const removeHidden = (elem, cls) => {
  elem.classList.remove(cls);
};

function addSubmitHandler(evt) {
  evt.preventDefault();
  inputEmail.value = "Круто!";
  addHidden(submitEmailBtn, "footer__submit-btn_hidden");
}

//listeners

//изменение вида меню в зависимости от разрешения экрана
window.addEventListener("resize", function () {
  if (window.matchMedia("(min-width: 320px)").matches) {
    bikesMenuItems[1].classList.add("bikes__menu-item_hidden");
    bikesMenuItems[2].classList.add("bikes__menu-item_hidden");
    themeFooter.closest(".theme").classList.add("theme_hidden");
  }
  if (window.matchMedia("(min-width: 1440px)").matches) {
    bikesMenuItems[1].classList.remove("bikes__menu-item_hidden");
    bikesMenuItems[2].classList.remove("bikes__menu-item_hidden");
    bikesArrowBtn.classList.add("bikes__arrow-btn_hidden");
    themeFooter.closest(".theme").classList.remove("theme_hidden");
    bikesLinkRoad.forEach((link) => {
      removeHidden(link, "bikes__link_hidden");
    });
    bikesLinkGravel.forEach((link) => {
      removeHidden(link, "bikes__link_hidden");
    });
    bikesLinkTT.forEach((link) => {
      removeHidden(link, "bikes__link_hidden");
    });
  }
});

//управление навигицией меню мобильной версии
menuBtn.addEventListener("click", () => {
  if (mobileMenu.classList.contains("header__mobile-menu_hidden")) {
    openMenu(mobileMenu);
  } else {
    closeMenu(mobileMenu);
  }
});

mobileMenuItems.forEach((item) => {
  item.addEventListener("click", () => {
    closeMenu(mobileMenu);
  });
});

//управление мобильной версией меню выбора вида катания
bikesArrowBtn.addEventListener("click", () => {
  if (bikesMenuItems[1].classList.contains("bikes__menu-item_hidden")) {
    bikesArrowBtn.style.transform = "rotate(180deg)";
    bikesMenuItems[0].style.borderBottomLeftRadius = "0";
    bikesMenuItems[0].style.borderBottomRightRadius = "0";
    bikesMenuItems[1].classList.remove("bikes__menu-item_hidden");
    bikesMenuItems[2].classList.remove("bikes__menu-item_hidden");
  } else {
    bikesArrowBtn.style.transform = "rotate(360deg)";
    bikesMenuItems[0].style.borderBottomLeftRadius = "2px";
    bikesMenuItems[0].style.borderBottomRightRadius = "2px";
    bikesMenuItems[1].classList.add("bikes__menu-item_hidden");
    bikesMenuItems[2].classList.add("bikes__menu-item_hidden");
  }
});

//меню выбора вида катания
bikesMenuItemsBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn === bikesMenuItemsBtn[0]) {
      btn.classList.add("bikes__menu-item-btn_active");
      bikesMenuItemsBtn[1].classList.remove("bikes__menu-item-btn_active");
      bikesMenuItemsBtn[2].classList.remove("bikes__menu-item-btn_active");
      removeHidden(cardsContainer[0], "bikes__cards-container_hidden");
      addHidden(cardsContainer[1], "bikes__cards-container_hidden");
      addHidden(cardsContainer[2], "bikes__cards-container_hidden");
      removeHidden(
        bikesMobileChooseContainer[0],
        "bikes__mobile-choose-container_hidden"
      );
      addHidden(
        bikesMobileChooseContainer[1],
        "bikes__mobile-choose-container_hidden"
      );
      addHidden(
        bikesMobileChooseContainer[2],
        "bikes__mobile-choose-container_hidden"
      );
    } else if (btn === bikesMenuItemsBtn[1]) {
      btn.classList.add("bikes__menu-item-btn_active");
      bikesMenuItemsBtn[0].classList.remove("bikes__menu-item-btn_active");
      bikesMenuItemsBtn[2].classList.remove("bikes__menu-item-btn_active");
      addHidden(cardsContainer[0], "bikes__cards-container_hidden");
      removeHidden(cardsContainer[1], "bikes__cards-container_hidden");
      addHidden(cardsContainer[2], "bikes__cards-container_hidden");
      addHidden(
        bikesMobileChooseContainer[0],
        "bikes__mobile-choose-container_hidden"
      );
      removeHidden(
        bikesMobileChooseContainer[1],
        "bikes__mobile-choose-container_hidden"
      );
      addHidden(
        bikesMobileChooseContainer[2],
        "bikes__mobile-choose-container_hidden"
      );
    } else {
      btn.classList.add("bikes__menu-item-btn_active");
      bikesMenuItemsBtn[0].classList.remove("bikes__menu-item-btn_active");
      bikesMenuItemsBtn[1].classList.remove("bikes__menu-item-btn_active");
      addHidden(cardsContainer[0], "bikes__cards-container_hidden");
      addHidden(cardsContainer[1], "bikes__cards-container_hidden");
      removeHidden(cardsContainer[2], "bikes__cards-container_hidden");
      addHidden(
        bikesMobileChooseContainer[0],
        "bikes__mobile-choose-container_hidden"
      );
      addHidden(
        bikesMobileChooseContainer[1],
        "bikes__mobile-choose-container_hidden"
      );
      removeHidden(
        bikesMobileChooseContainer[2],
        "bikes__mobile-choose-container_hidden"
      );
    }
  });
});

//пролистывание галереи вида катания по часовой
kindsCyclingNextBtns.forEach((btn, index) => {
  if (btn !== kindsCyclingNextBtns[kindsCyclingNextBtns.length - 1]) {
    btn.addEventListener("click", () => {
      btn.closest(".kinds-of-cycling").classList.add("kinds-of-cycling_hidden");
      kindsCyclingNextBtns[index + 1]
        .closest(".kinds-of-cycling")
        .classList.remove("kinds-of-cycling_hidden");
    });
  } else {
    btn.addEventListener("click", () => {
      btn.closest(".kinds-of-cycling").classList.add("kinds-of-cycling_hidden");
      kindsCyclingNextBtns[0]
        .closest(".kinds-of-cycling")
        .classList.remove("kinds-of-cycling_hidden");
    });
  }
});
//пролистывание галереи вида катания против часовой
kindsCyclingPrevBtns.forEach((btn, index) => {
  if (btn !== kindsCyclingPrevBtns[0]) {
    btn.addEventListener("click", () => {
      btn.closest(".kinds-of-cycling").classList.add("kinds-of-cycling_hidden");
      kindsCyclingPrevBtns[index - 1]
        .closest(".kinds-of-cycling")
        .classList.remove("kinds-of-cycling_hidden");
    });
  } else {
    btn.addEventListener("click", () => {
      btn.closest(".kinds-of-cycling").classList.add("kinds-of-cycling_hidden");
      kindsCyclingPrevBtns[kindsCyclingPrevBtns.length - 1]
        .closest(".kinds-of-cycling")
        .classList.remove("kinds-of-cycling_hidden");
    });
  }
});

//пролистывание велосипедов одной категории для мобильной версии
//..шоссе
mobileChooseRoad.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn === mobileChooseRoad[0]) {
      btn.classList.add("bikes__mobile-choose_active");
      mobileChooseRoad[1].classList.remove("bikes__mobile-choose_active");
      mobileChooseRoad[2].classList.remove("bikes__mobile-choose_active");
      removeHidden(bikesLinkRoad[0], "bikes__link_hidden");
      addHidden(bikesLinkRoad[1], "bikes__link_hidden");
      addHidden(bikesLinkRoad[2], "bikes__link_hidden");
    } else if (btn === mobileChooseRoad[1]) {
      btn.classList.add("bikes__mobile-choose_active");
      mobileChooseRoad[0].classList.remove("bikes__mobile-choose_active");
      mobileChooseRoad[2].classList.remove("bikes__mobile-choose_active");
      removeHidden(bikesLinkRoad[1], "bikes__link_hidden");
      addHidden(bikesLinkRoad[0], "bikes__link_hidden");
      addHidden(bikesLinkRoad[2], "bikes__link_hidden");
    } else {
      btn.classList.add("bikes__mobile-choose_active");
      mobileChooseRoad[0].classList.remove("bikes__mobile-choose_active");
      mobileChooseRoad[1].classList.remove("bikes__mobile-choose_active");
      removeHidden(bikesLinkRoad[2], "bikes__link_hidden");
      addHidden(bikesLinkRoad[0], "bikes__link_hidden");
      addHidden(bikesLinkRoad[1], "bikes__link_hidden");
    }
  });
});
//..грэвэл
mobileChooseGravel.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn === mobileChooseGravel[0]) {
      btn.classList.add("bikes__mobile-choose_active");
      mobileChooseGravel[1].classList.remove("bikes__mobile-choose_active");
      mobileChooseGravel[2].classList.remove("bikes__mobile-choose_active");
      removeHidden(bikesLinkGravel[0], "bikes__link_hidden");
      addHidden(bikesLinkGravel[1], "bikes__link_hidden");
      addHidden(bikesLinkGravel[2], "bikes__link_hidden");
    } else if (btn === mobileChooseGravel[1]) {
      btn.classList.add("bikes__mobile-choose_active");
      mobileChooseGravel[0].classList.remove("bikes__mobile-choose_active");
      mobileChooseGravel[2].classList.remove("bikes__mobile-choose_active");
      removeHidden(bikesLinkGravel[1], "bikes__link_hidden");
      addHidden(bikesLinkGravel[0], "bikes__link_hidden");
      addHidden(bikesLinkGravel[2], "bikes__link_hidden");
    } else {
      btn.classList.add("bikes__mobile-choose_active");
      mobileChooseGravel[0].classList.remove("bikes__mobile-choose_active");
      mobileChooseGravel[1].classList.remove("bikes__mobile-choose_active");
      removeHidden(bikesLinkGravel[2], "bikes__link_hidden");
      addHidden(bikesLinkGravel[0], "bikes__link_hidden");
      addHidden(bikesLinkGravel[1], "bikes__link_hidden");
    }
  });
});
//..раздельный старт и/или триатлон
mobileChooseTT.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn === mobileChooseTT[0]) {
      btn.classList.add("bikes__mobile-choose_active");
      mobileChooseTT[1].classList.remove("bikes__mobile-choose_active");
      mobileChooseTT[2].classList.remove("bikes__mobile-choose_active");
      removeHidden(bikesLinkTT[0], "bikes__link_hidden");
      addHidden(bikesLinkTT[1], "bikes__link_hidden");
      addHidden(bikesLinkTT[2], "bikes__link_hidden");
    } else if (btn === mobileChooseTT[1]) {
      btn.classList.add("bikes__mobile-choose_active");
      mobileChooseTT[0].classList.remove("bikes__mobile-choose_active");
      mobileChooseTT[2].classList.remove("bikes__mobile-choose_active");
      removeHidden(bikesLinkTT[1], "bikes__link_hidden");
      addHidden(bikesLinkTT[0], "bikes__link_hidden");
      addHidden(bikesLinkTT[2], "bikes__link_hidden");
    } else {
      btn.classList.add("bikes__mobile-choose_active");
      mobileChooseTT[0].classList.remove("bikes__mobile-choose_active");
      mobileChooseTT[1].classList.remove("bikes__mobile-choose_active");
      removeHidden(bikesLinkTT[2], "bikes__link_hidden");
      addHidden(bikesLinkTT[0], "bikes__link_hidden");
      addHidden(bikesLinkTT[1], "bikes__link_hidden");
    }
  });
});

//обработка формы
inputEmail.addEventListener("input", () => {
  if (inputEmail.value !== "") {
    removeHidden(submitEmailBtn, "footer__submit-btn_hidden");
  } else {
    addHidden(submitEmailBtn, "footer__submit-btn_hidden");
  }
});

submitForm.addEventListener("submit", addSubmitHandler);

//переключение тем
//..desktop
themeFooter.addEventListener("click", () => {
  if (themeFooter.checked !== true) {
    root.style.background = "#f4f4f4";
    root.style.color = "#151515";
    footer.style.background = "#efefef";
    headerDesktop.style.background = "#f4f4f4";
    headerMobile.style.background = "#f4f4f4";
    headerDesktop.style.color = "#151515";
    headerMobile.style.color = "#151515";
    paragraphs.forEach((p) => {
      p.style.color = "#222222";
    });
    paragraphs[paragraphs.length - 1].style.color = "#cfcfcf";
    motivationCaptionAccent.style.color = "#222222";
    kindsCyclingPrevBtns.forEach((btn) => {
      btn.style.backgroundColor = "#ebebeb";
      btn.style.backgroundImage =
        "url('./images/UI KIT btn-arrow-desktop-prev.svg')";
    });
    kindsCyclingNextBtns.forEach((btn) => {
      btn.style.backgroundColor = "#ebebeb";
      btn.style.backgroundImage = "url('./images/UI KIT btn-arrow-next.svg')";
    });
    bikesMenuItems.forEach((item) => {
      item.style.backgroundColor = "#f4f4f4";
    });
    bikesMenuItemsBtn.forEach((item) => {
      item.style.backgroundColor = "#f4f4f4";
      item.style.color = "#151515";
    });
    cardsContainer.forEach((item) => {
      item.style.backgroundColor = "#f4f4f4";
    });
    menuBtn.style.borderTop = "3px solid #151515";
    menuBtn.style.borderBottom = "3px solid #151515";
    menuMiddleLine.style.borderTop = "3px solid #151515";
    menuBtn.style.backgroundColor = '#f4f4f4';
  } else {
    root.style.background = "#333333";
    root.style.color = "#ffffff";
    footer.style.background = "#2f2f2f";
    headerDesktop.style.background = "#333333";
    headerMobile.style.background = "#333333";
    headerDesktop.style.color = "#ffffff";
    headerMobile.style.color = "#ffffff";
    paragraphs.forEach((p) => {
      p.style.color = "#e5e5e5";
    });
    paragraphs[paragraphs.length - 1].style.color = "#565656";
    motivationCaptionAccent.style.color = "#e5e5e5";
    kindsCyclingPrevBtns.forEach((btn) => {
      btn.style.backgroundColor = "#434343";
      btn.style.backgroundImage =
        "url('./images/UI KIT btn-arrow-prev-darken-desktop.svg')";
    });
    kindsCyclingNextBtns.forEach((btn) => {
      btn.style.backgroundColor = "#434343";
      btn.style.backgroundImage =
        "url('./images/UI KIT btn-arrow-next-darken-desktop.svg')";
    });
    bikesMenuItems.forEach((item) => {
      item.style.backgroundColor = "#333333";
    });
    bikesMenuItemsBtn.forEach((item) => {
      item.style.backgroundColor = "#333333";
      item.style.color = "#ffffff";
    });
    cardsContainer.forEach((item) => {
      item.style.backgroundColor = "#333333";
    });
    menuBtn.style.borderTop = "3px solid #ffffff";
    menuBtn.style.borderBottom = "3px solid #ffffff";
    menuMiddleLine.style.borderTop = "3px solid #ffffff";
    menuBtn.style.backgroundColor = '#333333';
  }
});

//..mobile
themeMobile.addEventListener("click", () => {
  if (themeMobile.checked !== true) {
    closeMenu(mobileMenu);
    root.style.background = "#f4f4f4";
    root.style.color = "#151515";
    footer.style.background = "#efefef";
    headerDesktop.style.background = "#f4f4f4";
    headerMobile.style.background = "#f4f4f4";
    headerDesktop.style.color = "#151515";
    headerMobile.style.color = "#151515";
    paragraphs.forEach((p) => {
      p.style.color = "#222222";
    });
    paragraphs[paragraphs.length - 1].style.color = "#cfcfcf";
    motivationCaptionAccent.style.color = "#222222";
    kindsCyclingPrevBtns.forEach((btn) => {
      btn.style.backgroundColor = "#ebebeb";
      btn.style.backgroundImage =
        "url('./images/UI KIT btn-arrow-desktop-prev.svg')";
    });
    kindsCyclingNextBtns.forEach((btn) => {
      btn.style.backgroundColor = "#ebebeb";
      btn.style.backgroundImage = "url('./images/UI KIT btn-arrow-next.svg')";
    });
    bikesMenuItems.forEach((item) => {
      item.style.backgroundColor = "#f4f4f4";
    });
    bikesMenuItemsBtn.forEach((item) => {
      item.style.backgroundColor = "#f4f4f4";
      item.style.color = "#151515";
    });
    cardsContainer.forEach((item) => {
      item.style.backgroundColor = "#f4f4f4";
    });
    menuBtn.style.borderTop = "3px solid #151515";
    menuBtn.style.borderBottom = "3px solid #151515";
    menuMiddleLine.style.borderTop = "3px solid #151515";
    menuBtn.style.backgroundColor = '#f4f4f4';
  } else {
    closeMenu(mobileMenu);
    root.style.background = "#333333";
    root.style.color = "#ffffff";
    footer.style.background = "#2f2f2f";
    headerDesktop.style.background = "#333333";
    headerMobile.style.background = "#333333";
    headerDesktop.style.color = "#ffffff";
    headerMobile.style.color = "#ffffff";
    paragraphs.forEach((p) => {
      p.style.color = "#e5e5e5";
    });
    paragraphs[paragraphs.length - 1].style.color = "#565656";
    motivationCaptionAccent.style.color = "#e5e5e5";
    kindsCyclingPrevBtns.forEach((btn) => {
      btn.style.backgroundColor = "#434343";
      btn.style.backgroundImage =
        "url('./images/UI KIT btn-arrow-prev-darken-desktop.svg')";
    });
    kindsCyclingNextBtns.forEach((btn) => {
      btn.style.backgroundColor = "#434343";
      btn.style.backgroundImage =
        "url('./images/UI KIT btn-arrow-next-darken-desktop.svg')";
    });
    bikesMenuItems.forEach((item) => {
      item.style.backgroundColor = "#333333";
    });
    bikesMenuItemsBtn.forEach((item) => {
      item.style.backgroundColor = "#333333";
      item.style.color = "#ffffff";
    });
    cardsContainer.forEach((item) => {
      item.style.backgroundColor = "#333333";
    });
    menuBtn.style.borderTop = "3px solid #ffffff";
    menuBtn.style.borderBottom = "3px solid #ffffff";
    menuMiddleLine.style.borderTop = "3px solid #ffffff";
    menuBtn.style.backgroundColor = '#333333';
  }
});
