document.addEventListener("DOMContentLoaded", function(){

let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 8000); // Change image every 8 seconds
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlide(n) {
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}


showSlides();// Start the slideshow

});

function openModal(imageSrc) {
    const modal = document.getElementById('myModal');
    const modalImage = document.getElementById('modalImage');

    modal.style.display = "block";
    modalImage.src = imageSrc;
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = "none";
}

// Add a click event listener to each image element
const mediaElements = document.querySelectorAll(".media-element img");
mediaElements.forEach((element) => {
    element.addEventListener("click", () => {
        openModal(element.src);
    });
});

// Add a click event listener to the close button
const closeModalButton = document.getElementById('closeModal');
closeModalButton.addEventListener("click", () => {
    closeModal();
});


