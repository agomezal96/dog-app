const parentContainer = document.querySelector('.dog-display');
const spinner = document.querySelector('.dog-spinner');
const dogImageContainer = document.querySelector('.dog-image');

export default function renderContent(isLoading) {
  parentContainer.classList.remove('hidden'); //We show the white frame.
  if (isLoading) {
    // Show spinner and hide dogImage div
    spinner.classList.remove('hidden');
    dogImageContainer.classList.add('hidden');
  } else {
    // Show dogImage and hide spinner
    spinner.classList.add('hidden');
    dogImageContainer.classList.remove('hidden');
  }
}
