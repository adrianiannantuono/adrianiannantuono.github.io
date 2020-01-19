const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".navLinks");
const links = document.querySelectorAll(".navLinks div");
const zInc = document.querySelectorAll(".landingPage-0-Content");

hamburger.addEventListener("click",()=> {
  navLinks.classList.toggle("open");
})
