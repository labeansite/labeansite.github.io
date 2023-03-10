/*
    manages de bgvideo auto scroll and margin top size.\
*/

{
    const onLoad = () => {
        if(document.querySelector('.wrapper-bgvideo') !== null) { // only runs if bgvideo was generated
            const button = document.querySelector('.video-scroll-button-container');
    
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
            
            const rouletteVideo = document.getElementById("roulette-video");
            const videoContainer = document.querySelector(".roulette__video-container");
            const buttons = document.querySelectorAll(".roulette__button");

            buttons.forEach((button) => {
                button.addEventListener("click", () => {
                    // Get the video source file for the clicked button
                    const src = button.dataset.video;

                    // Pause the current video and reset its playback position
                    rouletteVideo.pause();
                    rouletteVideo.currentTime = 0;

                    // Remove the "playing" class from the current video container
                    videoContainer.classList.remove("playing");

                    // Add the "loading" class to the video container
                    videoContainer.classList.add("loading");

                    // Create a new video element to load the next video
                    const newVideo = document.createElement("video");
                    newVideo.src = src;

                    // When the new video is loaded, switch it with the current video
                    newVideo.addEventListener("loadedmetadata", () => {
                        // Remove the "loading" class from the video container
                        videoContainer.classList.remove("loading");

                        // Add the "playing" class to the video container
                        videoContainer.classList.add("playing");

                        // Replace the current video with the new video
                        rouletteVideo.parentNode.replaceChild(newVideo, rouletteVideo);

                        // Set the new video as the current video
                        rouletteVideo = newVideo;
                    });

                    // Load the new video
                    newVideo.load();
                });
            });

        }
    };
    
    window.addEventListener("load", onLoad);
}
