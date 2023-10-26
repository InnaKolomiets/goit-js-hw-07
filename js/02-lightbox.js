import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');
galleryItems.forEach(item => {
    const galleryItem = document.createElement('li');
    const galleryLink = document.createElement('link');
    const galleryImage = document.createElement('img');

    galleryImage.src = item.preview;
    galleryImage.alt = item.description;
    galleryImage.classList.add('gallery__image');
    galleryItem.classList.add('gallery__item');

    galleryLink.href = item.original;
    galleryLink.classList.add('gallery__link');
    
    galleryLink.appendChild(galleryImage);
    galleryItem.appendChild(galleryLink);
    gallery.appendChild(galleryItem);
})

let lightbox = new SimpleLightbox('.gallery__link', { 
    captionsData: 'alt',
    captionDelay: 250
 });