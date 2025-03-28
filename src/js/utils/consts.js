const refs = {
  searchForm: document.querySelector('.js-form'),
  searchInput: document.querySelector('.js-search-input'),
  loader: document.querySelector('.js-loader'),
  gallery: document.querySelector('.js-gallery'),
  galleryCard: document.querySelector('.js-gallery-card'),
  loadMoreBtn: document.querySelector('.js-load-more-btn'),
};

const ACTIVE_CLASS = 'active';

const photoQueryParams = {
  page: 1,
  perPage: 15,
  query: '',
  maxPage: 1,
};


export { refs, ACTIVE_CLASS, photoQueryParams };