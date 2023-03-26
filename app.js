let title = document.querySelector("#title");
title.insertAdjacentHTML("beforeend","Pongámonos en contacto");

let text = document.querySelector(".text");
text.insertAdjacentHTML("beforeend","Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum adipisci recusandae praesentium dicta!");

let direccion = document.querySelector("#direccion");
direccion.insertAdjacentHTML("beforeend","Cll 12 # 15 -15");

let email = document.querySelector("#email");
email.insertAdjacentHTML("beforeend","correo@email.com");

let telefono = document.querySelector("#telefono");
telefono.insertAdjacentHTML("beforeend","123-456-789");

let social = document.querySelector("#social");
social.insertAdjacentHTML("beforeend","Conecta con nosotros :");

let contactanos = document.querySelector("#contactanos");
contactanos.insertAdjacentHTML("beforeend","Contáctanos");

let usuario = document.querySelectorAll(".form_label")[0];
usuario.insertAdjacentHTML("beforeend","Usuario");

let correo = document.querySelectorAll(".form_label")[1];
correo.insertAdjacentText("beforeend","Email");

let tel = document.querySelectorAll(".form_label")[2];
tel.insertAdjacentText("beforeend","Telefono");

let mensaje = document.querySelectorAll(".form_label")[3];
mensaje.insertAdjacentText("beforeend","Mensaje");

let icon1 = document.querySelectorAll(".icon")[0];
icon1.src = "img/location.png";
let icon2 = document.querySelectorAll(".icon")[1];
icon2.src = "img/email.png";
let icon3 = document.querySelectorAll(".icon")[2];
icon3.src = "img/phone.png";

let fab1 = document.querySelectorAll(".fab")[0];
fab1.classList.add("fa-facebook-f");

let fab2 = document.querySelectorAll(".fab")[1];
fab2.classList.add("fa-twitter");

let fab3 = document.querySelectorAll(".fab")[2];
fab3.classList.add("fa-instagram");

let fab4 = document.querySelectorAll(".fab")[3];
fab4.classList.add("fa-linkedin-in");

const inputs = document.querySelector(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

