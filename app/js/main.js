 $(document).ready(function() {


$('.single-item').slick();
     
     
$("a.sc").click(function () {
var elementClick = $(this).attr("href")
var destination = $(elementClick).offset().top;
jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
return false;
});
  
 

$("#tovar-popup-close").click(function () { 
 $('.tovar-popup').fadeOut(500);  
});
     
     
$("#tab1").click(function () {

      
 $('.torar-sliders_button').removeClass('active');   
 $('#tab1').addClass('active');  
 $('.new').appendTo($('.torar-sliders .slick-track'));
 $('.hit').appendTo($('.torar-sliders .slick-track'));
 $('.sale').appendTo($('.torar-sliders .slick-track'));
 $('.spec').appendTo($('.torar-sliders .slick-track'));
 $('.sl-t1').slick('slickGoTo',0);
    
}); 
    
     
$("#tab2").click(function () {
    
 $('.torar-sliders_button').removeClass('active');   
 $('#tab2').addClass('active');   
 $('.hit').appendTo($('.torar-sliders .slick-track'));
 $('.new').appendTo($('.torar-sliders .slick-track'));
 $('.sale').appendTo($('.torar-sliders .slick-track'));
 $('.spec').appendTo($('.torar-sliders .slick-track'));
 $('.sl-t1').slick('slickGoTo',0);  
    
}); 
      
$("#tab3").click(function () {
    
 $('.torar-sliders_button').removeClass('active');   
 $('#tab3').addClass('active'); 
 $('.sale').appendTo($('.torar-sliders .slick-track'));
 $('.new').appendTo($('.torar-sliders .slick-track'));
 $('.spec').appendTo($('.torar-sliders .slick-track'));
 $('.hit').appendTo($('.torar-sliders .slick-track'));
 $('.sl-t1').slick('slickGoTo',0); 
    
}); 
        
$("#tab4").click(function () {
    
 $('.torar-sliders_button').removeClass('active');   
 $('#tab4').addClass('active');   
 $('.spec').appendTo($('.torar-sliders .slick-track'));
 $('.new').appendTo($('.torar-sliders .slick-track'));
 $('.hit').appendTo($('.torar-sliders .slick-track'));
 $('.sale').appendTo($('.torar-sliders .slick-track'));
 $('.sl-t1').slick('slickGoTo',0); 

    
    
}); 
     

$('.brands__slider').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 11
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
     
     

$('.sl-t1').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
      
});

