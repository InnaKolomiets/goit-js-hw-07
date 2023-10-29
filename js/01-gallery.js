import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');
galleryItems.forEach(item => {
    const galleryItem = `<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
        <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
        />
    </a>
    </li>`;
    gallery.insertAdjacentHTML("afterBegin", galleryItem);
})

gallery.addEventListener('click', event => {
    event.preventDefault();
    const target = event.target;
    if (target.nodeName !== "IMG") {
        return;
    }
    const instance = basicLightbox.create(`<img src="${target.dataset.source}" width="1280" height="600">`)

    instance.show()
});


