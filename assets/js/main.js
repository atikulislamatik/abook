jQuery(
  (function ($) {
    "use strict";
    // Preloader
    $(window).ready(function () {
      $(".loader-content").fadeOut(1200);
    });

    // Metis Menu JS
    $(function () {
      $('#sidemenu-nav').metisMenu();
    });

    // Responsive Burger Menu JS
    $('.responsive-burger-menu').on('click', function () {
      $('.responsive-burger-menu').toggleClass('active');
      $('.sidemenu-area').toggleClass('active-sidemenu-area');
    });

    // Navbar Burger Menu JS
    $('.navbar-burger-menu').on('click', function () {
      $('.navbar-burger-menu').toggleClass('active');
      $('.sidemenu-area').toggleClass('active-sidemenu-area');
    });

    // Popup Video
    $(".popup-video").magnificPopup({
      disableOn: 320,
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
    });

    // Gallery
    $(".popup-img").magnificPopup({
      type: "image",
      removalDelay: 300,
      gallery: {
        enabled: true,
      },
    });


    // Owl Carausele

    $(".story-slider").owlCarousel({
      loop: true,
      margin: 20,
      dots: true,
      autoplay: true,
      autoplayHoverPause: true, 
      autoplayTimeout: 5500,
      responsive: {
        0: {
          items: 2,
        },
        576: {
          items: 2,
        },
        768: {
          items: 2,
        },
        1000: {
          items: 3,
        },
        1300: {
          items: 3,
        },
      },
    });


  })(jQuery)
);
