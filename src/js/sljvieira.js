if (typeof time === 'undefined') {
    let time = 4000;
  }
function startGalleryC() {
  let currentImageIndex = 0;
  let images = document.querySelectorAll("#jvieira img");
  let max = images.length;

  function nextImage() {
    images[currentImageIndex].classList.remove("selected-viera");
    currentImageIndex++;

    if (currentImageIndex >= max)
      currentImageIndex = 0;

    images[currentImageIndex].classList.add("selected-viera");
  }

  function start() {
    setInterval(() => {
      nextImage();
    }, time);
  }

  window.addEventListener("load", start);
}



startGalleryC();