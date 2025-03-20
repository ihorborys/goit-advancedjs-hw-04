import { refs } from './js/utils/consts.js';
import { handleSearch, loadMoreImages } from './js/handlers/form.js';


refs.searchForm.addEventListener('submit', handleSearch);

refs.loadMoreBtn.addEventListener('click', loadMoreImages);