import { galleryItems } from './gallery-items.js';
// Change code below this line

// ${original}

const galary = document.querySelector(".gallery")

function createGaleryMarkup(imageData) {
    return imageData.map(({preview,original,description}) =>
  `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a></li>`
    ).join("")
}

const galaryItemsMarkup = createGaleryMarkup(galleryItems);
galary.insertAdjacentHTML("beforeend", galaryItemsMarkup);


function openModal(evt) {
    if (evt.target.nodeName !== 'IMG') {
        return
    };
    const dataSource = evt.target.dataset.source;
    evt.preventDefault();
    const modal = createModalWindow(dataSource)
    modal.show(()=> window.addEventListener("keydown", escCloser));
    function escCloser(event) {
        if (event.code === "Escape") {
            modal.close(()=> window.removeEventListener("keydown", escCloser));
        }
        console.log(event)
    }
};

function createModalWindow(eventTar) {
    return basicLightbox.create(`
		<img width=100% height=100% src="${eventTar}">
	`)
}

galary.addEventListener('click', openModal)