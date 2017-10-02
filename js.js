$(document).ready(function () {
  var widthslide = $('.slide-conteiner').width();
  $('.slides>li').width(widthslide);
  $('.slides').width(widthslide*$('.slides>li').length);

  //position

  $('.slides').css('left',-widthslide);
  $('.slides>li:last-child').prependTo('.slides');

  function nextSlide () {
    $('.slides').animate({'margin-left':-widthslide}, 500,function() {
        $('.slides>li:first-child').appendTo('.slides');
        $('.slides').css('margin-left', 0)
    });
  }

  function prevSlide () {
    $('.slides').animate({'margin-left':widthslide}, 500,function() {
        $('.slides>li:last-child').prependTo('.slides');
        $('.slides').css('margin-left', 0)
    });
  }
  $('.next').click(nextSlide)
  $('.prev').click(prevSlide)
})
