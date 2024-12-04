function toggleDescription(imageElement) {
  const description = imageElement.nextElementSibling;
  if (description) {
      description.classList.toggle('show');
  }
}
// Check if the modal has been shown before Display the modal when the page loads
window.onload = function () {
  console.log("Modal logic executed");
  
  const modal = document.getElementById("eventModal");
  const modalShown = sessionStorage.getItem("modalShown");
  
  const today = new Date();
  const decemberFirst = new Date(today.getFullYear(), 11, 1);  // Month is 0-based (0 = January, 11 = December)
  const twoWeeksBefore = new Date(decemberFirst);

  twoWeeksBefore.setDate(decemberFirst.getDate() - 14); // Subtract 14 days
  if (today >= twoWeeksBefore && today < decemberFirst && !modalShown) {
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
