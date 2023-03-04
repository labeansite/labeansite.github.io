/*
    manages the mobile menu in place of the navbar
*/

{
    const onLoad = () => {
        // Get the elements
        const navbarContainer = document.querySelector('nav');
        const navbarToggle = document.querySelector('.navbar-toggle');
        const navbarClose = document.querySelector('.navbar-close');

        // Add an event listener to the toggle button
        navbarToggle.addEventListener('click', function() {
            navbarContainer.classList.toggle('show');
        });

        document.addEventListener('click', function(event) {
            const isClickInside = navbarContainer.contains(event.target) || navbarToggle.contains(event.target);
            if (!isClickInside) {
                navbarContainer.classList.remove('show');
            }
        });

        navbarClose.addEventListener('click', function() {
            navbarContainer.classList.remove('show');
        });
    };
    
    window.addEventListener("load", onLoad);
}
