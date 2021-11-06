import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryRef = document.querySelector('.gallery');
const createGalleryItemsMarkup = galleryItems.map(
    ({ preview, original, description }) =>
        `<li>
        <a class="gallery__item" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        alt="${description}" />
        </a>
        </li>`
).join('');
galleryRef.insertAdjacentHTML('beforeend', createGalleryItemsMarkup)


const lightbox = new SimpleLightbox(".gallery__item", {
  captions: true,
  captionsData: "alt",
  captionPosition: "bottom",
    captionDelay: 250,
  disableScroll: true,
});
// console.log(galleryItems);
