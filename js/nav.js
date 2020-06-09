const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".navLinks");
const lines = document.querySelectorAll(".line");



if (hamburger) {
  hamburger.addEventListener("click",()=> {
    navLinks.classList.toggle("open");
    for(i=0; i < lines.length; i++) {
      lines[i].classList.toggle("open");
      //console.log(lines[i]);
    }
    var height = document.getElementsByTagName("html")[0].scrollHeight;
		window.parent.postMessage(["resize-iframe", height], "*");
    //console.log(navLinks);
  });
}
