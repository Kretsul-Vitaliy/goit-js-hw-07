import { galleryItems } from './gallery-items.js';
// Change code below this line
let currentIndex = 0;
const galleryRef = document.querySelector('.gallery');
const createGalleryItemsMarkup = galleryItems.map(
    ({ preview, original, description }) =>
        `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
).join('');
galleryRef.insertAdjacentHTML('beforeend', createGalleryItemsMarkup);
const instance = basicLightbox.create(
    `<img src="" width="800" height="600">`,
    {
        onShow: (instance) => {
            window.addEventListener("keydown", onEscPress);
            // console.log("add");
        },

        onClose: (instance) => {
            window.removeEventListener("keydown", onEscPress);
            // console.log("remove");
        }
    }
);

galleryRef.addEventListener("click", getImageUrl);

function getImageUrl(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return
    };
    
   let srcLink = event.target.dataset.source;
    setOriginalURL(srcLink);
    // currentIndex = Number(event.target.dataset.index);
    instance.show();
    // console.log(srcLink);
};


function setOriginalURL(url) {
    instance.element().querySelector("img").src = url
}


// первый вариант
// function onEscPress({ key }) {
//     switch (key) {
//         case "ArrowRight":
//             currentIndex += 1
//         if (currentIndex >= galleryItems.length) {
//             currentIndex = 0
//         }
//         setOriginalURL(galleryItems[currentIndex].original)
//             break;
//         case "ArrowLeft":
//             currentIndex -= 1
//             if (currentIndex <= 0) {
//                 currentIndex = galleryItems.length - 1
//             }
//             setOriginalURL(galleryItems[currentIndex].original)
//             break;
//         case "Escape":
//             instance.close();
//             break;
        
//         default:
//             break;
//     }
// }

// Второй вариант
    function onEscPress (evt) {
    if (evt.key === "Escape") {
        instance.close();
    };
    if (evt.key === "ArrowRight") {
        currentIndex += 1
        if (currentIndex >= galleryItems.length) {
            currentIndex = 0
        }
        instance.element().querySelector("img").src = galleryItems[currentIndex].original
        console.log("right");
    };
    if (evt.key === "ArrowLeft") {
        currentIndex -= 1
        if (currentIndex <= 0) {
            currentIndex = galleryItems.length-1
        }
        instance.element().querySelector("img").src = galleryItems[currentIndex].original
        console.log("Left");
    }
    }
// console.log(galleryItems);
