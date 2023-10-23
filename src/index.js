const updateGallery = (index) => {
  const heroSectionGallery = document.getElementById("hero");

  const images = [
    'url("../images/mathiasznapok_2022_1.png")',
    'url("../images/mathiasznapok_2022_2.png")',
    'url("../images/mathiasznapok_2022_3.png")',
    'url("../images/mathiasznapok_2022_4.png")',
    'url("../images/mathiasznapok_2022_5.png")',
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

const one = document.querySelectorAll(".class1");
const two = document.querySelectorAll(".class2");
const three = document.querySelectorAll(".class3");

let oneSelectedIdx = 0;
let twoSelectedIdx = 0;
let threeSelectedIdx = 0;

one.forEach((element, idx) => {
  element.addEventListener("click", () => {
    one[oneSelectedIdx].style.backgroundColor = "var(--white)";
    element.style.backgroundColor = "var(--blue)";
    oneSelectedIdx = idx;
  });
});

two.forEach((element, idx) => {
  element.addEventListener("click", () => {
    two[twoSelectedIdx].style.backgroundColor = "var(--white)";
    element.style.backgroundColor = "var(--blue)";
    twoSelectedIdx = idx;
  });
});

three.forEach((element, idx) => {
  element.addEventListener("click", () => {
    three[threeSelectedIdx].style.backgroundColor = "var(--white)";
    element.style.backgroundColor = "var(--blue)";
    threeSelectedIdx = idx;
  });
});
