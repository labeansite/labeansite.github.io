// Get the elements
const navbarContainer = document.querySelector('.navbar-container');
const navbarToggle = document.querySelector('.navbar-toggle');

// Add an event listener to the toggle button
navbarToggle.addEventListener('click', function() {
  navbarContainer.classList.toggle('show');
});