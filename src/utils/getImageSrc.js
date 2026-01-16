export default async function getImageSrc(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.message;
  } catch (error) {
    console.log('Failed recovering the image src', error);
  }
}
