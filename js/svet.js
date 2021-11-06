import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const markup = galleryItems
  .map((item) => {
    return `<div class="gallery__item">
        <a class="gallery__link" href="${item.original}">
            <img
            class="gallery__image"
            src="${item.preview}"
            data-source="${item.original}"
            alt="${item.description}"
            />
        </a>
    </div>`;
  })
  .join("");
gallery.insertAdjacentHTML("beforeend", markup);

gallery.addEventListener("click", getImageUrl);

function getImageUrl(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }
  event.preventDefault();
  const imageUrl = event.target.dataset.source;
  let srcImage = instance.element().querySelector("img");
  srcImage.setAttribute("src", imageUrl);
  instance.show();
}
const instance = basicLightbox.create(
  `
    <img src="assets/images/image.png" width="800" height="600">
  `,
  {
    onShow: (instance) => {
      window.addEventListener("keydown", closeModal);
    },
    onClose: (instance) => {
      window.removeEventListener("keydown", closeModal);
    },
  }
);
function closeModal(event) {
  if (event.key === "Escape") {
    instance.close();
  }
}

console.log(galleryItems);