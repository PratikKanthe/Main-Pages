function observeElements(elements, className) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle(className, entry.isIntersecting);
      });
    }, {
      // Add your options here if needed
      // threshold: 1,
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
  

  $(document).ready(function(){



    $('.dmshow').click(function(){

        if($(this).find('i').hasClass('fa-bars1'))

        {

            $('#menuContainer').fadeIn();

            $('#headNav .ssh:not(:last)').removeClass('animated fadeIn faster').addClass('animated fadeOut faster');

            $('#headNav-mob .ssh:not(:last)').removeClass('animated fadeIn faster').addClass('animated fadeOut faster');

            $(this).find('i').removeClass('fa-bars1').addClass('fa-times1');

            $(this).find('span').text('Close');

        }

        else

        {

            $('#menuContainer').fadeOut();

            $('#headNav .ssh:not(:last)').removeClass('animated fadeOut faster').addClass('animated fadeIn faster');

            $('#headNav-mob .ssh:not(:last)').removeClass('animated fadeOut faster').addClass('animated fadeIn faster');

            $(this).find('i').removeClass('fa-times1').addClass('fa-bars1');

            $(this).find('span').text('Menu');

        }

    });



    $('.dmsearch').click(function(){

        $('.fs-searchpanel').removeClass('animated faster fadeOutUp').addClass('animated faster fadeInDown').show();

        $('.searchClose').show();

        $('.ssh').hide();



    });



    $('.searchClose').click(function(){

        $('.ssh').show();

        $('.fs-searchpanel').removeClass('animated faster fadeInDown').addClass('animated faster fadeOutUp').show();

        $('.searchClose').hide();

    });



})

const linksContainer = document.querySelector('.menu__box');

linksContainer.addEventListener('click', (e) => {
  if (e.target.matches('.menu__item')) {
    e.preventDefault();
    closeSideMenu();
   window.location.href = e.target.href;
  }
});

function  closeSideMenu() {
  const sideMenuToggle = document.querySelector('#dmshow');
  sideMenuToggle.click();
}