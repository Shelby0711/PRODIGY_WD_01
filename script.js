// Wait for the HTML document to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

    const nav = document.getElementById('main-nav');
    const menuToggle = document.getElementById('menu-toggle'); // Get hamburger button
    const navLinks = document.getElementById('nav-links');    // Get the links list (ul)
    const navLinkItems = navLinks.querySelectorAll('a'); // Get all links within the nav

    const scrollThreshold = 50;

    // --- Scroll Detection (same as before) ---
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY || document.documentElement.scrollTop;
        if (scrollPosition > scrollThreshold) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // --- Hamburger Menu Toggle ---
    if (menuToggle && navLinks) { // Check if elements exist
        menuToggle.addEventListener('click', function() {
            // Toggle the 'active' class on the button for 'X' animation
            menuToggle.classList.toggle('active');
            // Toggle the 'mobile-menu-active' class on the nav links list to show/hide
            navLinks.classList.toggle('mobile-menu-active');

            // ARIA accessibility: Update aria-expanded attribute
            const isExpanded = navLinks.classList.contains('mobile-menu-active');
            menuToggle.setAttribute('aria-expanded', isExpanded);
        });
    }

    // --- Close Mobile Menu When Link is Clicked (Optional but good UX) ---
     navLinkItems.forEach(link => {
        link.addEventListener('click', () => {
            // Check if the mobile menu is currently active
            if (navLinks.classList.contains('mobile-menu-active')) {
                 // If yes, simulate a click on the toggle button to close it
                 menuToggle.click();

            }
        });
     });

});
