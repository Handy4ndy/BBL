
    const videos = document.querySelectorAll('.galleryvideos iframe');
    const prevButton = document.getElementById('prevVideo');
    const nextButton = document.getElementById('nextVideo');
    let currentVideoIndex = 0;

    // Function to hide all videos except the one at the specified index
    function showVideo(indexToShow) {
        videos.forEach((video, index) => {
            if (index === indexToShow) {
                video.style.display = 'block';
            } else {
                video.style.display = 'none';
            }
        });
    }

    // Show the initial video (index 0)
    showVideo(currentVideoIndex);

    // Add click event listeners to the navigation buttons
    prevButton.addEventListener('click', () => {
        currentVideoIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
        showVideo(currentVideoIndex);
    });

    nextButton.addEventListener('click', () => {
        currentVideoIndex = (currentVideoIndex + 1) % videos.length;
        showVideo(currentVideoIndex);
    });

