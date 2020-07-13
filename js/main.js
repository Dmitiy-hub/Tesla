$(function() {
  $('.slider').slick({
    arrows: false,
    dots: true,
    fade: true,
    autoplay: 5000
  });

  $('.header-btn').on('click' , function(){
    $('.menu').addClass('active');
  });

  $('.close-btn').on('click' ,function(){
    $('.menu').removeClass('active')
  });
});