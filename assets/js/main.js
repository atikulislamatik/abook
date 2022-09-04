jQuery(
  (function ($) {
    "use strict";
    // Preloader
    $(window).ready(function () {
      $(".loader-content").fadeOut(1200);
    });
 // Go to Top
	// Scroll Event
	$(window).on('scroll', function(){
		var scrolled = $(window).scrollTop();
		if (scrolled > 300) $('.go-top').addClass('active');
		if (scrolled < 300) $('.go-top').removeClass('active');
	});  

	// Click Event
	$('.go-top').on('click', function() {
		$("html, body").animate({ scrollTop: "0" },  50);
    });

    	// Mean Menu
	$('.mean-menu').meanmenu({
		meanScreenWidth: "1199"
	});
	
	// Sticky, Go To Top JS
	$(window).on('scroll', function() {
		// Header Sticky JS
		if ($(this).scrollTop() >150){  
			$('.navbar-area').addClass("is-sticky");
		}
		else{
			$('.navbar-area').removeClass("is-sticky");
		};

		// Go To Top JS
		var scrolled = $(window).scrollTop();
		if (scrolled > 300) $('.go-top').addClass('active');
		if (scrolled < 300) $('.go-top').removeClass('active');
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
          items: 2,
        },
        1300: {
          items: 3,
        },
      },
    });


  })(jQuery)
);
