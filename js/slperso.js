if (typeof time === 'undefined') {
    let time = 4300;
  }
function startGalleryC() {
  let currentImageIndex = 0;
  let images = document.querySelectorAll("#perso img");
  let max = images.length;

  function nextImage() {
    images[currentImageIndex].classList.remove("selected-perso");
    currentImageIndex++;

    if (currentImageIndex >= max)
      currentImageIndex = 0;

    images[currentImageIndex].classList.add("selected-perso");
  }

  function start() {
    setInterval(() => {
      nextImage();
    }, time);
  }

  window.addEventListener("load", start);
}


startGalleryC();