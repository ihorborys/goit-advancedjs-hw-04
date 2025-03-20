import axios from 'axios';


const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '49309172-5f8130b15ef3c43c70e2ee30a';
const IMAGE_TYPE = 'photo';
const ORIENTATION = 'horizontal';
const SAFESEARCH = 'true';

let page = 1;
let per_page = 3;

let q = '';


async function getImages(query) {
  console.log(query);

  const params = {
    key: API_KEY,
    q: query,
    image_type: IMAGE_TYPE,
    orientation: ORIENTATION,
    safesearch: SAFESEARCH,
    per_page,
    page,
  };

  const response = await axios.get(BASE_URL, { params });
  // q = query;
  page += 1;

  console.log(page);
  return response.data;
}


export { getImages, page, per_page, q, axios };