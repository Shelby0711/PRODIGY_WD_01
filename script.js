// Wait for the HTML document to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {

    // Get a reference to the navigation bar element
    const nav = document.getElementById('main-nav');

    // Define a scroll threshold (how far down the user needs to scroll before the style changes)
    // You can adjust this value (in pixels)
    const scrollThreshold = 50;

    // Listen for the 'scroll' event on the window
    window.addEventListener('scroll', function() {
        // Get the current vertical scroll position
        const scrollPosition = window.scrollY || document.documentElement.scrollTop;

        // Check if the scroll position is greater than the threshold
        if (scrollPosition > scrollThreshold) {
            // If scrolled past the threshold, add the 'scrolled' class to the nav bar
            nav.classList.add('scrolled');
        } else {
            // If not scrolled past the threshold (or scrolled back up), remove the 'scrolled' class
            nav.classList.remove('scrolled');
        }
    });

}); // End of DOMContentLoaded listener
