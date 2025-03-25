import { getImages } from '../pixabay-api.js';
import { noFoundImages, noFoundQuery } from '../services/izitoast.js';
import { createCardsMarkup } from '../render-functions.js';
import { ACTIVE_CLASS, refs } from '../utils/consts.js';
import { lightBox } from '../services/simplelightbox.js';


async function handleSearch(event) {
  event.preventDefault();

  const loader = refs.loader;
  const form = event.currentTarget;
  const userQuery = form.elements.user_query.value.trim();

  if (!userQuery) {
    return noFoundQuery();
  }

  loader.classList.add(ACTIVE_CLASS);

  try {
    const images = await getImages(userQuery);
    loader.classList.remove(ACTIVE_CLASS);

    if (!images.total) {
      refs.gallery.innerHTML = '';
      refs.loadMoreBtn.classList.remove(ACTIVE_CLASS);
      return noFoundImages();
    }

    refs.gallery.innerHTML = createCardsMarkup(images.hits);
    refs.loadMoreBtn.classList.add(ACTIVE_CLASS);
    lightBox.refresh();


  } catch (error) {
    loader.classList.remove(ACTIVE_CLASS);
    console.log(error);

  } finally {
    form.reset();
  }
}


export { handleSearch };