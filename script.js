// This script adds interactivity to the HTML page

// Log a message when the page loads
window.addEventListener('DOMContentLoaded', () => {
    console.log('Page is fully loaded and ready to go!');

    // Example functionality: Change the header color on click
    const header = document.querySelector('header');
    header.addEventListener('click', () => {
        header.style.backgroundColor = header.style.backgroundColor === 'blue' ? '#4CAF50' : 'blue';
    });

    // Example functionality: Display an alert when the main content is clicked
    const main = document.querySelector('main');
    main.addEventListener('click', () => {
        alert('You clicked on the main content!');
    });
});
