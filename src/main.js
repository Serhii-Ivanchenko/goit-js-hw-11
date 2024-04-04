import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// import iziToast from 'izitoast';
// import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.js-search-form ');
const btn = document.querySelector('.search-button');
const input = document.querySelector('.search-input');
const gallery = document.querySelector('ul.gallery');
const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '43222860-c920ce4922a75b9f5ac3c35c2';
let searchInput = '';

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  if (input.value.trim() === '') {
    return alert('Fill the field!');
  }

  searchInput = input.value;

  getData(searchInput)
    .then(data => {
      gallery.insertAdjacentHTML('beforeend', createMarkUp(data.hits));
      const photosGallery = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
        overlayOpacity: 0.8,
      });
    })
    .catch(error => console.log(error))
    .finally(() => form.reset());
}

function getData(str) {
  const parameters = new URLSearchParams({
    key: API_KEY,
    q: str,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`${BASE_URL}?${parameters}`).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}

function createMarkUp(arr) {
  return arr
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `<li class="gallery-item">
        <div class="thumb">
            <a class="gallery-link" href="${largeImageURL}">
              <img
                class="gallery-image"
                src="${webformatURL}"
                alt="${tags}"
              />
            </a>
              <ul class="description-list">
                <li class="description-items"><span class="accent">Likes </span>${likes}</li>
                <li class="description-items"><span class="accent">Views </span>${views}</li>
                <li class="description-items"><span class="accent">Comments </span>${comments}</li>
                <li class="description-items"><span class="accent">Downloads </span>${downloads}</li>
              </ul>
        </div>
      </li>`
    )
    .join('');
}
