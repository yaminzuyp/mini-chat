// Mini Chat App
console.log("Mini Chat App Started!");

// Basic DOM manipulation
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM loaded");
    
    // Add basic functionality here
    const title = document.querySelector('h1');
    if (title) {
        title.style.color = 'blue';
        title.addEventListener('click', function() {
            alert('Welcome to Mini Chat!');
        });
    }
});
