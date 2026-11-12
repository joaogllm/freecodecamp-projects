const galleryImages = document.querySelectorAll(".gallery-item");
const lightboxModal = document.querySelector(".lightbox");
const lightboxImage = document.querySelector("#lightbox-image");
const closeButton = document.querySelector("#close-btn");
galleryImages.forEach((image) => {
  image.addEventListener("click", () => {
    const imageSrc = image.src;
    const fullSize = imageSrc.replace("-thumbnail", "");
    lightboxImage.src = fullSize;

    lightboxModal.classList.add("active");
  });
});

closeButton.addEventListener("click", () => {
  lightboxModal.classList.remove("active");
});

lightboxModal.addEventListener("click", (event) => {
  if (event.target === lightboxModal) {
    lightboxModal.classList.remove("active");
  }
});
