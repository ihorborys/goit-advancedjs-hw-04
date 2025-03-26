import { ACTIVE_CLASS, photoQueryParams, refs } from '../utils/consts.js';
import { loadmoreButton } from '../../main.js';
import { getImages } from '../pixabay-api.js';
import { createCardsMarkup } from '../render-functions.js';
import { endOfCollection } from '../services/izitoast.js';


async function handleLoadMore() {
  photoQueryParams.page += 1;
  loadmoreButton.disable();
  loadmoreButton.hide();
  refs.loader.classList.add(ACTIVE_CLASS);

  try {
    const images = await getImages(photoQueryParams);
    console.log(images);

    const markup = createCardsMarkup(images.hits);

    refs.loader.classList.remove(ACTIVE_CLASS);
    refs.gallery.insertAdjacentHTML('beforeend', markup);

    loadmoreButton.show();
    loadmoreButton.enable();

    //Перевірка на кінець колекції
    if (photoQueryParams.page === photoQueryParams.maxPage) {
      loadmoreButton.hide();
      loadmoreButton.button.removeEventListener('click', handleLoadMore);
      endOfCollection();
    }

  } catch (error) {
    console.log(error);
    loadmoreButton.hide();
  }
}


export { handleLoadMore };