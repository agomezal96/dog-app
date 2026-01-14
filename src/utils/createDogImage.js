import capitalizeBreed from './capitalizeBreed.js';

export default function createDogImage(src, breed) {
  const dogDisplay = document.querySelector('.dog-display');

  dogDisplay.innerHTML = `<img src="${src}" alt="${breed} photo">`;

  dogDisplay.classList.add('frame');

  const breedName = document.createElement('h3');
  breedName.textContent = capitalizeBreed(breed);
  dogDisplay.appendChild(breedName);
}
