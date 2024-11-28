function toggleDescription(imageElement) {
  const description = imageElement.nextElementSibling;
  if (description) {
      description.classList.toggle('show');
  }
}
// Display the modal when the page loads
// Check if the modal has been shown before
window.onload = function () {
  const modal = document.getElementById("eventModal");
  const modalShown = sessionStorage.getItem("modalShown");

  if (!modalShown) {
      // Show the modal
      modal.style.display = "block";
      // Mark the modal as shown in sessionStorage
      sessionStorage.setItem("modalShown", "true");
  }
};

// Close the modal
function closeModal() {
  const modal = document.getElementById("eventModal");
  modal.style.display = "none";
}
