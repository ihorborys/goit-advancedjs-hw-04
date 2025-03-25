import { refs } from './js/utils/consts.js';
import { handleSearch } from './js/handlers/form.js';
import LoadMoreButton from './js/services/buttonService.js';


refs.searchForm.addEventListener('submit', handleSearch);

const loadmoreButton = new LoadMoreButton(refs.loadMoreBtn);


export { loadmoreButton };