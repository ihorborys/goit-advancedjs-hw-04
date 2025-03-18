function createCardsMarkup(images)  {
  return images
    .map(
      ({webformatURL, largeImageURL, tags, likes, views, comments, downloads}) =>
    `<li class="gallery-card">
      <a class="gallery-link" href="${largeImageURL}">
        <img
        class="gallery-img"
        src="${webformatURL}"
        alt="${tags}">
        <div class="gallery-img-info">
          <ul class="gallery-img-info-card">
              <li class="info-card-title likes">Likes</li>
              <li class="info-card-value likes">${likes}</li>
          </ul>
          <ul class="gallery-img-info-card">
              <li class="info-card-title likes">Views</li>
              <li class="info-card-value likes">${views}</li>
          </ul>
          <ul class="gallery-img-info-card">
              <li class="info-card-title likes">Comments</li>
              <li class="info-card-value likes">${comments}</li>
          </ul>
          <ul class="gallery-img-info-card">
              <li class="info-card-title likes">Downloads</li>
              <li class="info-card-value likes">${downloads}</li>
          </ul>
        </div>
      </a>
    </li>`
  )
    .join('')
}


export {createCardsMarkup}