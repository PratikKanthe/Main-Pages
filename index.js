function observeElements(elements, className) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle(className, entry.isIntersecting);
      });
    }, {
      // Add your options here if needed
    //   threshold: 1,
    });
  
    elements.forEach((element) => {
      observer.observe(element);
    });
  }
  
  // // Helicopters
  // const helicopter1 = document.querySelectorAll(".helicopter");
  // observeElements(helicopter1, "helicopter-show");
  
  // const helicopter2 = document.querySelectorAll(".helicopter2");
  // observeElements(helicopter2, "helicopter2-show");
  
  // const helicopter3 = document.querySelectorAll(".helicopter3");
  // observeElements(helicopter3, "helicopter3-show");
  
  // // Tanks
  // const tank1 = document.querySelectorAll(".tank");
  // observeElements(tank1, "tank-show");
  
  // const tank2 = document.querySelectorAll(".tank2");
  // observeElements(tank2, "tank2-show");
  
  // const tank3 = document.querySelectorAll(".tank3");
  // observeElements(tank3, "tank3-show");
  
  // // drone
  // const drone1 = document.querySelectorAll(".drone");
  // observeElements(drone1, "drone-show");
  
  // const drone2 = document.querySelectorAll(".drone2");
  // observeElements(drone2, "drone2-show");
  
  // const drone3 = document.querySelectorAll(".drone3");
  // observeElements(drone3, "drone3-show");

  // // atomics
  // const atomics = document.querySelectorAll(".atomic");
  // observeElements(atomics, "atomic-show");
  
  // // plane
  // const plane = document.querySelectorAll(".slide-plane-hide");
  // observeElements(plane, "slide-plane-show");

  // fade in up
  const fadeInUp = document.querySelectorAll(".fade-content-hide");
  observeElements(fadeInUp, "fade-content-show");
  