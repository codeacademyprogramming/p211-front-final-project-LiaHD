'use strict';

















$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });

  var owl = $('.owl-carousel');
owl.owlCarousel({
    items:4,
    loop:true,
    margin:20,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    dots:true
});


$('.count').each(function () {
  $(this).prop('Counter',0).animate({
      Counter: $(this).text()
  }, {
      duration: 4000,
      easing: 'swing',
      step: function (now) {
          $(this).text(Math.ceil(now));
      }
  });
});

$(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
 
 
      slideSpeed : 300,
      paginationSpeed : 400,
 
      items : 1, 
      itemsDesktop : false,
      itemsDesktopSmall : false,
      itemsTablet: false,
      itemsMobile : false,
      autoplayHoverPause:false
 
  });
 
});
