function toggleDescription(imageElement) {
  const description = imageElement.nextElementSibling;
  if (description) {
      description.classList.toggle('show');
  }
}