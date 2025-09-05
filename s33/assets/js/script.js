let maintitle = document.getElementById("main-title");
console.log(maintitle);
console.log(maintitle.innerText);
maintitle.innerText = " TITULO CAMBIADO";
console.log(maintitle.innerText);
console.log("selecionar por clase");
let mainTexts = document.getElementsByClassName("main-text");
console.log(mainTexts);
console.log(mainTexts[0].innerText);
console.log(mainTexts[2].innerText);
mainTexts[1].innerText = "LOREM";
let title = document.getElementsByTagName("h2");
console.log(title);
console.log(title[2].innerText);
console.log("selecionar por sintaxis css - QUERY selector");
let queryMaintitle = document.querySelector("#main-title");
console.log(queryMaintitle);
let queryMaintexts = document.querySelectorAll(".main-text");
console.log(queryMaintexts);
document.getElementById("clicker").addEventListener("click", function () {
  console.log("haz hecho clic en el boton");
})
clicker. classlist.lo







