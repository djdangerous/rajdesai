jQuery(document).ready(function(){
  
  var swiper_slider = new Swiper('.slider_wrapper', {
    prevButton: '.slider_nav.prev',
    nextButton: '.slider_nav.next',
    slidesPerView: 10,
    centeredSlides: true,
    effect: 'coverflow',
    slidesOffsetBefore: 0,
    speed: 400,
    coverflow: {
      rotate: 30,
      stretch: -10,
      depth: 100,
      modifier: 3,
      slideShadows : true
    },
    breakpoints: {
      320:{slidesPerView: 3},
      640:{slidesPerView: 5},
      1024:{slidesPerView: 7}
    },
    simulateTouch: true
  });
  
  var nb_slides = swiper_slider.params.slidesPerView;
  swiper_slider.slideTo(Math.floor(nb_slides / 2));
  
  jQuery('.swiper-wrapper a:not(.swiper-slide-active)').on('click', function(e){
    e.preventDefault();
    console.log($(this).index());
    swiper_slider.slideTo(jQuery(this).index());
    return false;
  });
});
