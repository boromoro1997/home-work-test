import { galleryItems } from './gallery-items.js';
// Change code below this line


const galary = document.querySelector(".gallery");

function imageGridMarkupCreator(array) {
    return galleryItems.map(({ preview, original, description }) =>
        `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
   <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
   </li>`
    ).join('')
}
const imageGridMarkup = imageGridMarkupCreator(galleryItems)
galary.insertAdjacentHTML('beforeend',imageGridMarkup )

galary.addEventListener('click', openModal);
function openModal(evt) {
    if (evt.target.nodeName !== 'IMG') {
        return
    };
    evt.preventDefault();

}
let lightbox = new SimpleLightbox('.gallery a', { captionPosition: "top", captionsData: "alt", captionDelay: 250});
console.log(lightbox)


