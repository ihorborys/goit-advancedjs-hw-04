import { photoQueryParams } from '../utils/consts.js';
import { loadmoreButton } from '../../main.js';
import { getImages } from '../pixabay-api.js';


async function handleLoadMore() {
  photoQueryParams.page += 1;
  loadmoreButton.disable();

  try {
    const images = await getImages(photoQueryParams);
    console.log(images);

  } catch (error) {
    console.log(error);
    loadmoreButton.hide();
  }
}


export { handleLoadMore };