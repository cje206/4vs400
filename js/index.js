let now = 0;
$(document).ready(function(){
  setInterval(function(){slide();},3000);
  function slide () {
    now = now === 3 ? 0 : now+=1;
    $('.slideBox').animate({left:now*-100+'%'});
    $('.moPagerNum').text(`${now+1} / 4`);
  }
});

$('.moMenuOpen').on('click',function(){
  $('.moMenuBox').stop().animate({left:0});
  $('.moMenuClose').removeClass('hide');
  $('.hSearch').addClass('hide');
  $('.goCart').addClass('hide');
  $('.moMenuOpen').addClass('hide');
  $('body').css({overflow:'hidden'});
});
$('.moMenuClose').on('click',function(){
  $('.moMenuBox').stop().animate({left:'-100%'});
  $('.moMenuOpen').removeClass('hide');
  $('.hSearch').removeClass('hide');
  $('.goCart').removeClass('hide');
  $('.moMenuClose').addClass('hide');
  $('body').css({overflow:'visible'});
});

$('.tabBtn').on('click', function(){
  $('.tabBtn').removeClass('active')
  $(this).addClass('active');
});

$('.bestBox').on('click', function(){
  $('.bestBox').removeClass('active');
  $(this).addClass('active');
});

$('.mmlBox').on('click', function(){
  $('.mmlBox').children('.mmlList').stop().slideUp();
  $(this).children('.mmlList').stop().slideToggle();
});

$('.flogo').on('click', function(){
  $('.fText').stop().slideToggle();
  $('.fMenu').stop().slideToggle();
});