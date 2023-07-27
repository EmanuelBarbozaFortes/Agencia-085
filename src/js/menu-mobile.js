const center = document.querySelector(".center");

center.addEventListener("click", () => {
  center.classList.toggle("selecionado");

  const selecionado = document.querySelector(".center.selecionado");
  const nav = document.querySelector(".navegation-mobile");

  if (selecionado) {
    nav.classList.toggle("selecionado");
  } else {
    nav.classList.remove("selecionado");
  }
});