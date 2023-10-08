const updateGallery = (index) => {
  const heroSectionGallery = document.getElementById("hero");

  const images = [
    'url("http://127.0.0.1:5500/images/mathiasznapok_2022_1.png")',
    'url("http://127.0.0.1:5500/images/mathiasznapok_2022_2.png")',
    'url("http://127.0.0.1:5500/images/mathiasznapok_2022_3.png")',
    'url("http://127.0.0.1:5500/images/mathiasznapok_2022_4.png")',
    'url("http://127.0.0.1:5500/images/mathiasznapok_2022_5.png")',
  ];

  heroSectionGallery.style.animation = "galleryFadeOut 0.4s ease-in-out 0s 1";
  heroSectionGallery.style.backgroundImage = images[index];
  heroSectionGallery.style.animation = "galleryFadeIn 0.4s ease-in-out 0s 1";
  setTimeout(() => {
    heroSectionGallery.style.animation = "";
  }, 300);
};

let imageIndex = 1;

setInterval(() => {
  updateGallery(imageIndex);
  if (imageIndex >= 4) {
    imageIndex = 0;
  } else {
    imageIndex++;
  }
}, 3000);
