import "./style.css";
import { createHomePage } from "./homePage";
import { createMenuPage } from "./menuPage";
import { createAboutPage } from "./aboutPage";

const homeBtn = document.querySelector("#home-btn");
const aboutBtn = document.querySelector("#about-btn");
const menuBtn = document.querySelector("#menu-btn");

function ActivateBtn(pressedBtn) {
  // de-activating all btns first
  homeBtn.classList.remove("active-btn");
  aboutBtn.classList.remove("active-btn");
  menuBtn.classList.remove("active-btn");

  pressedBtn.classList.add("active-btn");
}

homeBtn.addEventListener("click", function () {
  ActivateBtn(homeBtn);
  createHomePage();
});

menuBtn.addEventListener("click", function () {
  ActivateBtn(menuBtn);
  createMenuPage();
});

aboutBtn.addEventListener("click", function () {
  ActivateBtn(aboutBtn);
  createAboutPage();
});
