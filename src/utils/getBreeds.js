export default async function getBreeds() {
  try {
    const response = await fetch('https://dog.ceo/api/breeds/list/all');

    const data = await response.json();

    return data.message;
  } catch (error) {
    console.log('Failed loading the breeds');
  }
}