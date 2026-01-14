export default function capitalizeBreed(breed) {
    const capital = breed[0].toUpperCase();
    const restOfCharacters = breed.slice(1);
    return capital + restOfCharacters;
}