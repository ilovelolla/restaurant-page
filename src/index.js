// index.js
import "./styles.css";
import  {homeInfo}from "./home.js";
import  {AboutInfo}from "./about.js";
import  {MenuInfo}from "./menu.js";

const homeBtn = document.querySelector(".home");
const menuBtn = document.querySelector(".menu");
const aboutBtn = document.querySelector(".about");
const main = document.querySelector("main");
const text = [...main.querySelectorAll("div")];
const btns = [...main.querySelectorAll("button")];

function toggleText(event) {
 
  if (event.target.matches("button")) {
    let index = btns.indexOf(event.target);
    text.forEach(div => div.classList.add("hidden"));
    text[index].classList.remove("hidden");
  }

  if(event.target.matches(".home")) {
    homeBtn.removeEventListener("click", homeInfo);
  }
   if(event.target.matches(".menu")) {
   menuBtn.removeEventListener("click", MenuInfo);
  }
  if(event.target.matches(".about")) {
   aboutBtn.removeEventListener("click", AboutInfo);
  }
  
}

homeBtn.addEventListener("click", homeInfo);
aboutBtn.addEventListener("click", AboutInfo);
menuBtn.addEventListener("click", MenuInfo);
main.addEventListener("click", toggleText);