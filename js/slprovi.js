// if (typeof time === 'undefined') {
//     let time = 3000;
//   }
// function startGalleryC() {
//   let currentImageIndex = 0;
//   let images = document.querySelectorAll("#provi img");
//   let max = images.length;

//   function nextImage() {
//     images[currentImageIndex].classList.remove("selected-provi");
//     currentImageIndex++;

//     if (currentImageIndex >= max)
//       currentImageIndex = 0;

//     images[currentImageIndex].classList.add("selected-provi");
//   }

//   function start() {
//     setInterval(() => {
//       nextImage();
//     }, time);
//   }

//   window.addEventListener("load", start);
// }


// startGalleryC();

let time = 4000;

function startGalleryC() {
  let currentImageIndex = 0;
  let images = document.querySelectorAll("#provi img");
  let max = images.length;

  function nextImage() {
    images[currentImageIndex].classList.remove("selected-provi");
    currentImageIndex++;

    if (currentImageIndex >= max)
      currentImageIndex = 0;

    images[currentImageIndex].classList.add("selected-provi");
  }

  function start() {
    setInterval(() => {
      nextImage();
    }, time);
  }

  window.addEventListener("load", start);
}

startGalleryC();
