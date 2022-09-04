jQuery(
  (function ($) {
    "use strict";
    // Preloader
    $(window).ready(function () {
      $(".loader-content").fadeOut(1200);
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


        // Sticky Nav1
        $(document).on("scroll", function () {
          if ($(document).scrollTop() > 100) {
            $(".navbar-area").addClass("is-sticky");
          } else {
            $(".navbar-area").removeClass("is-sticky");
          }
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
          items: 2,
        },
        1300: {
          items: 3,
        },
      },
    });


    


  })(jQuery)
);
