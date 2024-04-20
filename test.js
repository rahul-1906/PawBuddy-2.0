const gallery = document.querySelector('.gallery');
    const galleryContainer = document.querySelector('.gallery-container');
  
    let slideIndex = 0;
    const slideWidth = galleryContainer.clientWidth;
    let animationID;
  
    function nextSlide() {
      if (slideIndex < gallery.children.length - 1) {
        slideIndex++;
      } else {
        slideIndex = 0;
      }
      updateSlide();
      animationID = requestAnimationFrame(nextSlide);
    }
  
    function updateSlide() {
      gallery.style.transition = 'transform 2s ease-in-out'; // Adjust transition duration and easing function
      gallery.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
    }
  
    animationID = requestAnimationFrame(nextSlide);