const button = document.querySelector('.video-scroll-button');

const navbar = document.querySelector('header');

const videoWrapper = document.querySelector('.wrapper-bgvideo')

// add a click event listener to the button
button.addEventListener('mouseenter', () => {
    // scroll to the next section
    window.scrollTo({
        top: window.pageYOffset - navbar.getBoundingClientRect().height + videoWrapper.getBoundingClientRect().bottom,
        behavior: 'smooth'
    });
});

// Set the initial value of the --navbar-height variable to the navbar's height
function updateNavbarHeight() {
    document.documentElement.style.setProperty('--navbar-height', navbar.getBoundingClientRect().height + 'px');
}

updateNavbarHeight(); // sets initial value

const mq1000 = window.matchMedia('(max-width: 1000px)');
const mq700 = window.matchMedia('(max-width: 700px)');
// Add listeners to the media query objects
mq1000.addEventListener('change', updateNavbarHeight);
mq700.addEventListener('change', updateNavbarHeight);