import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');
galleryItems.forEach(item => {
    const galleryItem = `<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
    </a>
    </li>`;

    gallery.insertAdjacentHTML("afterBegin", galleryItem);
})

let lightbox = new SimpleLightbox('.gallery__link', { 
    captionsData: 'alt',
    captionDelay: 250
 });