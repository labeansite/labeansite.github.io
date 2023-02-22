const button = document.querySelector('.video-scroll-button');

const navbar = document.querySelector('header');

const videoWrapper = document.querySelector('.wrapper-bgvideo')

// add a click event listener to the button
button.addEventListener('click', () => {
    // scroll to the next section
    window.scrollTo({
        top: window.pageYOffset - navbar.getBoundingClientRect().height + videoWrapper.getBoundingClientRect().bottom,
        behavior: 'smooth'
    });
});
