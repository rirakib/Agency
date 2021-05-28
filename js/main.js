// THIS IS FOR JAVASCRIPT PAGE



$(document).ready(function(){

    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.top_bar').addClass('sticky');
        }
        else{
            $('.top_bar').removeClass('sticky');
        }
        
    });

    $(".search_box").click(function(){
      $(this).toggleClass("search-width");
    });

    $('.fa-search-plus').magnificPopup({
        items: [
          {
            src: './img/prot-img-1.png'
          },
          {
            src: './img/prot-img-2.png'
          },
          {
            src: './img/prot-img-3.png'
          },
          {
            src: './img/prot-img-4.png'
          },
          {
            src: './img/prot-img-5.png'
          },
          {
            src: './img/prot-img-6.png'
          }
        ],
        gallery: {
          enabled: true
        },
        type: 'image' // this is default type
    });

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

   

  //   $('.owl-carousel').owlCarousel({
  //     loop:true,
  //     margin:10,
  //     responsiveClass:true,
  //     responsive:{
  //         0:{
  //             items:1,
  //             nav:true
  //         },
  //         600:{
  //             items:1,
  //             nav:false
  //         },
  //         1000:{
  //             items:2,
  //             nav:true,
  //             loop:false
  //         }
  //     }
  // })

   

});