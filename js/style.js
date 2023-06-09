$(document).ready(function(){
     $('#banner_slider').owlCarousel({
          loop:true,
          mouseDrag:false,
          nav:false,
          items:1,
          autoplay:true,
          smartSpeed: 2000,
          dots:false,
      });

     $('#Popular_Properties').owlCarousel({
          loop:true,
          margin:30,
          nav: true,
          navText: ['Prev','Next'],
          responsive:{
            0:{
                items:1
            },
            700:{
                items:2 
            },
            900:{
                items:3
            }
        }
      });

      $('#customer_review').owlCarousel({
        loop:true,
        margin:20,
        nav:true,
        navText: ['Prev','Next'],
        autoplay:true,
        smartSpeed:2000,
        responsive:{
            0:{
                items:1
            },
            700:{
                items:2 
            },
            900:{
                items:3
            }
        }
    });
    $('#single_property').owlCarousel({
        loop:true,
        mouseDrag:false,
        nav:false,
        items:1,
        autoplay:true,
        smartSpeed: 2000,
        dots:true,
    });
});
