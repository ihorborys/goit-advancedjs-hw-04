import SimpleLightbox from 'simplelightbox';


const lightBox = new SimpleLightbox('.gallery-link', {
  captionsData: 'alt',
  captionDelay: 250});


export { lightBox }