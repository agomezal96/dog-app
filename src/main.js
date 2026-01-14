import getBreeds from '../utils/getBreeds.js';
import capitalizeBreed from '../utils/capitalizeBreed.js';
import getDogImage from '../utils/getDogImage.js';

const selector = document.getElementById('dog-selector');

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
  const breeds = await getBreeds(); // The data we obtain is an object consisting of a key with race and a value array of subraces.
  const breedsArray = Object.keys(breeds); // We want an array of races, so we create an array with all the keys of the object (array of strings)
  fillSelector(breedsArray); //we create the options of the selector.

  selector.addEventListener('change', onChangeHandler);
}

function onChangeHandler(event) {
  const selectedBreed = event.target.value; // We access to the selected value.
  if (selectedBreed) {
    getDogImage(selectedBreed);
  }
}
