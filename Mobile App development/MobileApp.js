// Selecting the container element and the left/right buttons
const container = document.querySelector('.our-case-studies-maindiv .row');
const leftButton = document.querySelector('.mobileapp-case-left-button button');
const rightButton = document.querySelector('.mobileapp-case-right-button button');

// Function to handle clicking on the left button
leftButton.addEventListener('click', () => {
  // Scroll the container to the left by subtracting its scroll width
  container.scrollLeft -= container.offsetWidth;
});

// Function to handle clicking on the right button
rightButton.addEventListener('click', () => {
  // Scroll the container to the right by adding its scroll width
  container.scrollLeft += container.offsetWidth;
});
