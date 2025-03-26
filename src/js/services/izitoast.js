import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';


const noFoundQuery = () => {
  iziToast.error({
    title: `❌ Please, enter a query!`,
    message: '',
    position: 'topRight',
    color: 'red',
    icon: '',
  });
};

const noFoundImages = () => {
  iziToast.error({
    title: `❌ Sorry, there are no images matching your search query. Please try again!`,
    message: '',
    position: 'topRight',
    color: 'red',
    icon: '',
  });
};

const endOfCollection = () => {
  iziToast.info({
    title: `We're sorry, but you've reached the end of search results.`,
    message: '',
    position: 'topRight',
    color: 'blue',
  });
};


export { noFoundImages, noFoundQuery, endOfCollection };