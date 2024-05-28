import "./style.css";
import { createHomePage } from "./homePage";
import { createMenuPage } from "./menuPage";
import { createAboutPage } from "./aboutPage";

const homeBtn = document.querySelector("#home-btn");
const aboutBtn = document.querySelector("#about-btn");
const menuBtn = document.querySelector("#menu-btn");

homeBtn.addEventListener("click", createHomePage);

menuBtn.addEventListener("click", createMenuPage);

aboutBtn.addEventListener("click", createAboutPage);
