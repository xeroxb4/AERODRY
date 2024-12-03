let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

// Function to move slides
function moveSlide(step) {
    currentSlide += step;

    // If the slide number exceeds the total number of slides, reset to the first slide.
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    // Adjust the slides' transform property to show the current slide
    const slideWidth = slides[0].clientWidth;
    const offset = -currentSlide * slideWidth;

    document.querySelector('.slides').style.transform = `translateX(${offset}px)`;
}

// Set interval for automatic slide change every 5 seconds
let slideInterval = setInterval(() => moveSlide(1), 10000); // 5000ms = 5 seconds

// Stop the auto-sliding when the user manually interacts
function stopAutoSlide() {
    clearInterval(slideInterval);
}

// Stop all sliding (both manual and auto)
function stopAllSliding() {
    clearInterval(slideInterval);  // Stop automatic slide
    // Optionally, disable manual buttons too (uncomment below line to disable buttons)
    // document.querySelector('.prev').disabled = true;
    // document.querySelector('.next').disabled = true;
}

// Event listeners for manual buttons
document.querySelector('.prev').addEventListener('click', () => {
    stopAutoSlide();  // Stop auto sliding
    moveSlide(-1);
});

document.querySelector('.next').addEventListener('click', () => {
    stopAutoSlide();  // Stop auto sliding
    moveSlide(1);
});

// Example: call stopAllSliding to completely stop the slide
// Uncomment the line below to stop all slides (both manual and auto)
stopAllSliding();  // Call this function to stop all sliding
