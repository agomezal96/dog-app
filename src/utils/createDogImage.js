import capitalizeBreed from './capitalizeBreed.js';

export default function createDogImage(src, breed) {
  const dogImageContainer = document.querySelector('.dog-image');
  if (breed) {
    dogImageContainer.innerHTML = `
      <img src="${src}" alt="${breed} photo">
      <h3>${capitalizeBreed(breed)}</h3>
      `; // Clean the old content and add the new one.
  } else {
    dogImageContainer.innerHTML = ` <img src=${src} alt="Random dog photo"></img>
      `;
  }
}
