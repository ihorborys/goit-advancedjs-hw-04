const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '49309172-5f8130b15ef3c43c70e2ee30a';
const IMAGE_TYPE = 'photo';
const ORIENTATION = 'horizontal';
const SAFESEARCH = 'true';


function getImages(query) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: IMAGE_TYPE,
    orientation: ORIENTATION,
    safesearch: SAFESEARCH,
  })

  return fetch(`${BASE_URL}?${params}`)
    .then(response => {
      if(!response.ok) {
        throw new Error(response.status);
      }

      return response.json();
    })
}


export {getImages}