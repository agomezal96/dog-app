const BREEDS_URL = 'https://dog.ceo/api/breeds/list/all'

export default async function getBreeds() {
  try {
    const response = await fetch(BREEDS_URL);

    const data = await response.json();

    return data.message;
  } catch (error) {
    console.log('Failed loading the breeds');
  }
}