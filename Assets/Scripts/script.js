const videos = document.querySelectorAll('.galleryvideos iframe');
    const dots = document.querySelectorAll('.video-selector .dot');

    // Function to hide all videos except the one at the specified index
    function showVideo(indexToShow) {
        videos.forEach((video, index) => {
            if (index === indexToShow) {
                video.style.display = 'block';
            } else {
                video.style.display = 'none';
            }
        });

        // Highlight the selected dot
        dots.forEach((dot, index) => {
            if (index === indexToShow) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    // Show the initial video (index 0)
    showVideo(0);
