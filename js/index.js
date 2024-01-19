let now = 0;
$(document).ready(function(){
  setInterval(function(){slide();},3000);
  function slide () {
    now = now === 3 ? 0 : now+=1;
    $('.slidePager p').removeClass('pagerActive');
    $(`.slidePager p:nth-child(${now+2})`).addClass('pagerActive');
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

$('.tabContBox').on('click', function(){
  $('.tabContBox').removeClass('active bookR bookL');
  $(this).addClass('active').css({top:0});
  let bookHeight = parseInt($(this).children('.tabContentImg').css('height'));
  $(this).prev().addClass('bookL').css({top:bookHeight/2+'px'});
  $(this).next().addClass('bookR').css({top:bookHeight/2+'px'});
});

$('.bestBox').on('click', function(){
  $('.bestBox').removeClass('active');
  $(this).addClass('active');
  $('.bestBox').css('border-bottom','1px solid #ddd');
  $(this).prev().css('border-bottom','none');
});

$('.mmlBox').on('click', function(){
  $('.mmlBox').children('.mmlList').stop().slideUp();
  $(this).children('.mmlList').stop().slideToggle();
});

$('.flogo').on('click', function(){
  $('.fText').stop().slideToggle();
  $('.fMenu').stop().slideToggle();
});