import { photoQueryParams, refs } from '../utils/consts.js';
import { loadmoreButton } from '../../main.js';
import { getImages } from '../pixabay-api.js';
import { createCardsMarkup } from '../render-functions.js';


async function handleLoadMore() {
  photoQueryParams.page += 1;
  loadmoreButton.disable();

  try {
    const images = await getImages(photoQueryParams);
    console.log(images);

    const markup = createCardsMarkup(images.hits);

    refs.gallery.insertAdjacentHTML('beforeend', markup);
    loadmoreButton.enable();

    //Перевірка на кінець колекції
    if (photoQueryParams.page === photoQueryParams.maxPage) {
      loadmoreButton.hide();
      loadmoreButton.button.removeEventListener('click', handleLoadMore);
    }

  } catch (error) {
    console.log(error);
    loadmoreButton.hide();
  }
}


export { handleLoadMore };