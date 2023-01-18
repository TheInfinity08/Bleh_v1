const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const google_hover = document.querySelector(".google-hover");
const google_img = document.querySelector(".google-img");


sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

function disp() {
  var gimg = document.getElementsByClassName('google-hover');
  gimg[0].style.display = "none";
  gimg[1].style.display = "none";
  document.getElementById('ggl-img').style.display = "flex";
  document.getElementById('ggl-img-sign-up').style.display = "flex";
}


function appear() {
  var gimg = document.getElementsByClassName('google-hover');
  gimg[0].style.display = "flex";
  gimg[1].style.display = "flex";
  document.getElementById('ggl-img').style.display = "none";
  document.getElementById('ggl-img-sign-up').style.display = "none";
}