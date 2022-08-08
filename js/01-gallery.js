import { galleryItems } from './gallery-items.js';
// Change code below this line

{
	/*
	 * Prevents the lightbox from closing when clicking its background.
	 */
	closable: true,
	/*
	 * One or more space separated classes to be added to the basicLightbox element.
	 */
	className: '',
	/*
	 * Function that gets executed before the lightbox will be shown.
	 * Returning false will prevent the lightbox from showing.
	 */
	onShow: (instance) => {},
	/*
	 * Function that gets executed before the lightbox closes.
	 * Returning false will prevent the lightbox from closing.
	 */
	onClose: (instance) => {}
}

console.log(galleryItems);
const refs = {
  boxGallery: document.querySelector('.gallery'),
};

const onOpenImg = e => {
  e.preventDefault();

  console.log(e.target.dataset.source);
};
refs.boxGallery.addEventListener('click', onOpenImg);

const addGalleryItem = () => {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`;
    })
    .join('');
};
refs.boxGallery.insertAdjacentHTML('beforeend', addGalleryItem());

const instance = basicLightbox.create(`
    <img src="">
`);

instance.show();

console.log(refs.boxGallery);
