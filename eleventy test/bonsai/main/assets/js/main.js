 jQuery(document).ready(function(){

     "use strict"

/*  - Carouserl Slider Interval Speed
------------------------------------------------*/
  jQuery("#menuzord").menuzord({
    align: "right"
  });
/*  - End Of Carouserl Slider Interval Speed
------------------------------------------------*/



/*  - for search bar toggle 
---------------------------------------------------*/
  jQuery( ".toggle-pade" ).click(function() {
    jQuery( ".form-group" ).toggle( "slow" );
  });
/*  - for search bar toggle end 
---------------------------------------------------*/



/*  - Quote Slider
---------------------------------------------------*/ 
$('.quote-section .owl-carousel').owlCarousel({
  loop:true, // loop is true up to 1199px screen.
  nav:false, // is true across all sizes
  margin:0, // margin 10px till 960 breakpoint
  autoplay: true,
  responsiveClass:true, // Optional helper class. Add 'owl-reponsive-' + 'breakpoint' class to main element.
  responsive:{
    0:{
      items:1 // In this configuration 1 is enabled from 0px up to 479px screen size 
    },
    1200:{
      items:1,
      loop:false,
      margin: 0,
    }
  }
}); 
/*  - End Of Quote Slider
---------------------------------------------------*/ 



/*  - Quote Slider
---------------------------------------------------*/ 
$('.mm-our-project .owl-carousel').owlCarousel({
  loop:true, // loop is true up to 1199px screen.
  nav:false, // is true across all sizes
  margin:0, // margin 10px till 960 breakpoint
  autoplay: true,
  responsiveClass:true, // Optional helper class. Add 'owl-reponsive-' + 'breakpoint' class to main element.
  responsive:{
    0:{
      items:1 // In this configuration 1 is enabled from 0px up to 479px screen size 
    },
    1200:{
      items:5,
      loop:false,
      margin: 0,
    },
    991:{
      items:3,
      loop:false,
      margin: 0,
    },
    640:{
      items:2,
      loop:false,
      margin: 0,
    }
  }
}); 
/*  - End Of Quote Slider
---------------------------------------------------*/ 


/*  - product Details Slider
---------------------------------------------------*/ 
$('.mm-product-details .owl-carousel').owlCarousel({
  loop:true, // loop is true up to 1199px screen.
  nav:false, // is true across all sizes
  margin:0, // margin 10px till 960 breakpoint
  autoplay: true,
  responsiveClass:true, // Optional helper class. Add 'owl-reponsive-' + 'breakpoint' class to main element.
  responsive:{
    0:{
      items:1 // In this configuration 1 is enabled from 0px up to 479px screen size 
    },
    1200:{
      items:3,
      loop:false,
      margin: 0,
    },
    680:{
      items:2,
      loop:false,
      margin: 0,
    }
  }
}); 
/*  - End Of product Details Slider
---------------------------------------------------*/ 



/*  - Project Details Slider
---------------------------------------------------*/ 
$('.mm-project-details .owl-carousel').owlCarousel({
  loop:true, // loop is true up to 1199px screen.
  nav:false, // is true across all sizes
  margin:0, // margin 10px till 960 breakpoint
  autoplay: true,
  responsiveClass:true, // Optional helper class. Add 'owl-reponsive-' + 'breakpoint' class to main element.
  responsive:{
    0:{
      items:1 // In this configuration 1 is enabled from 0px up to 479px screen size 
    },
    1200:{
      items:3,
      loop:false,
      margin: 0,
    },
    680:{
      items:2,
      loop:false,
      margin: 0,
    }
  }
}); 
/*  - End Of Project Details Slider
---------------------------------------------------*/ 



}); // Document Resdy Function End
