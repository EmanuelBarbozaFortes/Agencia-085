const menuItems = document.querySelectorAll('.nav a[href^="#"]');
menuItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    scrollToIdOnClick(e);
    addAndRemoveClass(e); 

  });
});

function addAndRemoveClass(item) {
//   const ativo = document.querySelector(".ativo");

//   ativo.classList.remove("ativo");

//   item.classList.add("ativo");


  const nav = document.querySelector(".navegation-mobile");
  const selecionado = document.querySelector(".center.selecionado");

  if (item) {
    nav.classList.remove("selecionado");
    selecionado.classList.remove("selecionado");

  }
}
function scrollToIdOnClick(event) {
  event.preventDefault();

  const to = getScrollTopByHref(event.target) - 150;

  scrollToPosition(to);
}

function getScrollTopByHref(element) {
  const id = element.getAttribute("href");
  return document.querySelector(id).offsetTop;
}

function scrollToPosition(to) {
  smoothScrollTo(0, to, 1000);
}

function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== "undefined" ? duration : 400;

  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1)
      return (distance / 2) * time * time * time * time + from;
    return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60);
}
