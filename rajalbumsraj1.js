jQuery(document).ready(function(){
  
  var swiper_slider = new Swiper('.sliderraj1_wrapper', {
    prevButton: '.sliderraj1_nav.prev',
    nextButton: '.sliderraj1_nav.next',
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
  
  jQuery('.swiperraj1-wrapper a:not(.swiperraj1-slideraj1-active)').on('click', function(e){
    e.preventDefault();
    console.log($(this).index());
    swiper_slider.slideTo(jQuery(this).index());
    return false;
  });
});