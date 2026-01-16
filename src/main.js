import getBreeds from './utils/getBreeds.js';
import capitalizeBreed from './utils/capitalizeBreed.js';
import createDogImage from './utils/createDogImage.js';
import getImageSrc from './utils/getImageSrc.js';
import renderContent from './utils/renderContent.js';

const selector = document.getElementById('dog-selector');

const RANDOM_IMAGE_URL = 'https://dog.ceo/api/breeds/image/random'

let isLoading = true;

startApp();

//* *********FUNCTIONS *************

function fillSelector(arrayOfBreeds) {
  selector.innerHTML = '<option value="">Choose a breed...</option>';

  arrayOfBreeds.forEach((breed) => {
    const option = document.createElement('option');
    option.value = breed;
    option.textContent = capitalizeBreed(breed);
    selector.appendChild(option);
  });
}

async function startApp() {
  //Load random Image at the beginning
  renderContent(isLoading);
  const randomImageSrc = await getImageSrc(RANDOM_IMAGE_URL);
  createDogImage(randomImageSrc);
  isLoading = false;
  renderContent(isLoading)
  //Fill the selector with a list of breeds:
  const breeds = await getBreeds(); // The data we obtain is an object consisting of a key with race and a value array of subraces.
  const breedsArray = Object.keys(breeds); // We want an array of races, so we create an array with all the keys of the object (array of strings)
  fillSelector(breedsArray); //we create the options of the selector.
  selector.addEventListener('change', onChangeHandler);
}

async function onChangeHandler(event) {
  const selectedBreed = event.target.value; // We access to the selected value.
  const BREED_IMAGE_URL = `https://dog.ceo/api/breed/${selectedBreed}/images/random`;

  if (selectedBreed) {
    isLoading = true;
    renderContent(isLoading)
    const imageSrc = await getImageSrc(BREED_IMAGE_URL);
    createDogImage(imageSrc, selectedBreed)
    isLoading = false;
    renderContent(isLoading)
  }
}
