// This file contains common functionality for both Submit and View pages

// Get the observations from localStorage
function getObservations() {
  return JSON.parse(localStorage.getItem("observations")) || [];
}

// Save observations to localStorage
function saveObservations(observations) {
  localStorage.setItem("observations", JSON.stringify(observations));
}

let currentIndex = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.carousel-slide img');
    const totalSlides = slides.length;

    // Update the currentIndex and keep it in the bounds of available slides
    currentIndex = (currentIndex + step + totalSlides) % totalSlides;

    // Move the carousel to the correct image
    document.querySelector('.carousel-slide').style.transform = `translateX(-${currentIndex * 100}%)`;
}
// JavaScript to add 'sticky-nav' class when scrolling
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    const links = document.querySelector('.nav-links');
    const logo = document.querySelector('.brand img');
  
    if (window.scrollY > 50) {
      nav.classList.add('sticky-nav');
    } else {
      nav.classList.remove('sticky-nav');
    }
  });