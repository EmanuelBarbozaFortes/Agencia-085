if (typeof time === 'undefined') {
    let time = 4400;
  }
function startGalleryC() {
  let currentImageIndex = 0;
  let images = document.querySelectorAll("#oliver img");
  let max = images.length;

  function nextImage() {
    images[currentImageIndex].classList.remove("selected-oliver");
    currentImageIndex++;

    if (currentImageIndex >= max)
      currentImageIndex = 0;

    images[currentImageIndex].classList.add("selected-oliver");
  }

  function start() {
    setInterval(() => {
      nextImage();
    }, time);
  }

  window.addEventListener("load", start);
}


startGalleryC();