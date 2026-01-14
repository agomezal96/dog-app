import createDogImage from './createDogImage.js';

export default async function getDogImage(breed) {
  const DOG_IMAGE_URL = `https://dog.ceo/api/breed/${breed}/images/random`;

  try {
    const response = await fetch(DOG_IMAGE_URL);
    const data = await response.json();
    const imageSrc = data.message;

    createDogImage(imageSrc, breed);
  } catch (error) {
    console.log('Failed recovering the dog image', error);
  }
}
