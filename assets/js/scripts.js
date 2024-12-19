(function ($) {
  jQuery("header nav").meanmenu({
    meanScreenWidth: "750",
    meanMenuOpen: "<span></span><span></span><span></span>",
    meanMenuClose: "X",
    meanExpand: "+",
    meanContract: "-",
  });
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 15, // Gap between items
    nav: false, // Enable navigation
    dots: false, // Enable pagination dots
    autoplay: true,
    autoplayHoverPause: true,
    smartSpeed: 1000, // Transition speed
    responsive: {
      // Mobile view (0px and up)
      0: {
        items: 2,
        margin: 15,
      },
      // Tablet view (768px and up)
      768: {
        items: 5,
        margin: 15,
      },
      // Desktop view (1024px and up)
      1024: {
        items: 7,
        margin: 15,
      },
    },
    // Optional: Additional settings for smoother performance
    lazyLoad: true,
    freeDrag: false,
    pullDrag: true,
    touchDrag: true,
    mouseDrag: true,
  });
})(jQuery);
