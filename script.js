// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// hamburger.addEventListener('click', () => {
//     navLinks.classList.toggle('active');
//     hamburger.classList.toggle('active');
// });
// // Dropdown functionality for mobile
// dropdown.addEventListener('click', (event) => {
//     if (window.innerWidth <= 992) {
//         dropdown.classList.toggle('active');
//     }
//     if (window.innerWidth <= 992) {
//         dropdown.classList.toggle('active');
//     }
// });

// Toggle the mobile/tablet menu
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Function to toggle dropdown on tablet/mobile
function handleDropdownClick(event) {
    // Prevent link from navigating
    event.preventDefault();

    // Toggle the 'active' class on the dropdown for mobile/tablet
    if (window.innerWidth <= 992) {
        dropdownMenu.classList.toggle('active');
    }
}

// Add event listener for dropdown menu
dropdown.addEventListener('click', handleDropdownClick);

// Handle window resize to close dropdown if window is resized
window.addEventListener('resize', () => {
    // Remove 'active' class if window is resized above 992px (desktop)
    if (window.innerWidth > 992) {
        dropdownMenu.classList.remove('active');
        navLinks.classList.remove('active');
    }
});