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

    galleryImage.setAttribute('data-source', item.original);
    galleryLink.classList.add('gallery__link');
    galleryLink.href = '#';
    
    galleryLink.appendChild(galleryImage);
    galleryItem.appendChild(galleryLink);
    gallery.appendChild(galleryItem);
})

gallery.addEventListener('click', event => {
    const target = event.target;
    if (target.nodeName !== "IMG") {
        return;
    }
    const instance = basicLightbox.create(`
    <img src="${target.dataset.source}" width="1280" height="600">
`)

instance.show()
});


