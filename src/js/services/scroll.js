function scroll() {

  const galleryCard = document.querySelector('.js-gallery-card');

  if (!galleryCard) {
    console.log('No card yet');
    return;
  }

  const cardHeight = galleryCard.getBoundingClientRect().height;

  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}


export { scroll };