import axios from 'axios';
import { photoQueryParams } from './utils/consts.js';


const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '49309172-5f8130b15ef3c43c70e2ee30a';
const IMAGE_TYPE = 'photo';
const ORIENTATION = 'horizontal';
const SAFESEARCH = 'true';


async function getImages(query) {

  const params = {
    key: API_KEY,
    q: query,
    image_type: IMAGE_TYPE,
    orientation: ORIENTATION,
    safesearch: SAFESEARCH,
    per_page: photoQueryParams.perPage,
    page: photoQueryParams.page,
  };

  const response = await axios.get(BASE_URL, { params });

  return response.data;
}


export { getImages };