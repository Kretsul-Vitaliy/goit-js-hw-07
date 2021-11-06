import { galleryItems } from './gallery-items.js';
// Change code below this line

//1. Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
// 2.Реализация делегирования на div.gallery и получение url большого изображения.
// 3.Подключение скрипта и стилей библиотеки модального окна basicLightbox. Используй CDN 
// сервис jsdelivr и добавь в проект ссылки на минифицированные(.min) файлы библиотеки.
// 4.Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.
// const instance = basicLightbox.create(`<img src='' width="800" height="600">`)
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
    
    const imageUrl = event.target.dataset.source;
    let srclink = instance.element().querySelector('img');
    srclink.setAttribute("src", imageUrl);
    instance.show();
};

function onEscPress({ key }) {
    switch (key) {
        case "ArrowRight":
            currentIndex += 1
        if (currentIndex >= galleryItems.length) {
            currentIndex = 0
        }
        setOriginalURL(galleryItems[currentIndex].original)
            break;
        case "ArrowLeft":
            currentIndex -= 1
            if (currentIndex <= 0) {
                currentIndex = galleryItems.length - 1
            }
            setOriginalURL(galleryItems[currentIndex].original)
            break;
        case "Escape":
            instance.close();
            break;
        
        default:
            break;
    }
}
    
// Второй вариант
    // function onEscPress (evt) {
//     if (evt.key === "Escape") {
//         instance.close();
//     };
//     if (evt.key === "ArrowRight") {
//         currentIndex += 1
//         if (currentIndex >= galleryItems.length) {
//             currentIndex = 0
//         }
//         instance.element().querySelector("img").src = galleryItems[currentIndex].original
//         console.log("right");
//     };
//     if (evt.key === "ArrowLeft") {
//         currentIndex -= 1
//         if (currentIndex <= 0) {
//             currentIndex = galleryItems.length-1
//         }
//         instance.element().querySelector("img").src = galleryItems[currentIndex].original
//         console.log("Left");
//     }
//     }
console.log(galleryItems);

