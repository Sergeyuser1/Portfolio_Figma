const nav = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-button-burger");
const navImg = document.querySelector("#nav-button-burger-img");

navBtn.onclick = () => {
  if (nav.classList.toggle("open")) {
    navImg.src = "./img/navigation/mav_close.svg";
  } else {
    navImg.src = "./img/navigation/mav_open.svg";
  }
};
AOS.init();
