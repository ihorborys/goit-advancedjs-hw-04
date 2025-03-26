import { getImages } from '../pixabay-api.js';
import { noFoundImages, noFoundQuery } from '../services/izitoast.js';
import { createCardsMarkup } from '../render-functions.js';
import { ACTIVE_CLASS, photoQueryParams, refs } from '../utils/consts.js';
import { lightBox } from '../services/simplelightbox.js';
import { loadmoreButton } from '../../main.js';
import { handleLoadMore } from './load-more.js';
import { scroll } from '../services/scroll.js';


async function handleSearch(event) {
  event.preventDefault();

  // Скидання попередніх станів перед новим запитом
  loadmoreButton.hide();
  photoQueryParams.page = 1;
  photoQueryParams.maxPage = 1;

  const loader = refs.loader;
  const form = event.currentTarget;
  const userQuery = form.elements.user_query.value.trim();


  if (!userQuery) {
    return noFoundQuery();
  }

  loader.classList.add(ACTIVE_CLASS);
  photoQueryParams.query = userQuery;

  try {
    const images = await getImages(userQuery);

    loader.classList.remove(ACTIVE_CLASS);

    photoQueryParams.maxPage = Math.ceil(images.total / images.hits.length);

    if (!images.total) {
      refs.gallery.innerHTML = '';
      refs.loadMoreBtn.classList.remove(ACTIVE_CLASS);
      return noFoundImages();
    }

    refs.gallery.innerHTML = createCardsMarkup(images.hits);
    
    scroll();

    if (photoQueryParams.maxPage === 1) {
      return;
    }

    loadmoreButton.show();
    loadmoreButton.enable();
    loadmoreButton.button.addEventListener('click', handleLoadMore);

    lightBox.refresh();

  } catch (error) {
    loader.classList.remove(ACTIVE_CLASS);
    console.log(error);

  } finally {
    form.reset();
  }
}


export { handleSearch };