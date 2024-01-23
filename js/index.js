// 슬라이드 변수
let now = 0;

// 실시간 BEST 변수
let bnow = 0;

$(document).ready(function(){
  setInterval(function(){slide();},3000);
  function slide () {
    now = now === 3 ? 0 : now+=1;
    $('.slidePager p').removeClass('pagerActive');
    $(`.slidePager p:nth-child(${now+2})`).addClass('pagerActive');
    $('.slideBox').animate({left:now*-100+'%'});
    $('.moPagerNum').text(`${now+1} / 4`);
  }
  setInterval(function(){bestSlide();},7000);
  function bestSlide() {
    bnow = bnow === 4 ? 0 : bnow+=1;
    $('.bestBox').removeClass('active');
    $(`.bestBox:nth-child(${bnow+1})`).addClass('active');
    $('.bestInfo').css('top',-(bnow)*65+'px');
    $('.bestBox').css('border-bottom','1px solid #ddd');
    $(`.bestBox:nth-child(${bnow})`).css('border-bottom','none');
  }
});

$(window).resize(function(){
  let screenWidth = $(window).width();
  if (screenWidth < 1200) {
    $('.tabContBox').removeClass('bookL');
    $('.tabContBox').removeClass('bookR');
    $('.tabContBox').removeClass('active');
    $('.tabContBox').css({'top':'auto',height:'fit-content'});
    $('.tabContBox:nth-child(1)').addClass('active');
    $('.tabContBox:nth-child(2)').addClass('bookR');
    $('.bookR').css('top','94px');
    $('.tabContBox').on('click');

  } else {
    $('.tabContBox').removeClass('bookL');
    $('.tabContBox').removeClass('bookR');
    $('.tabContBox').removeClass('active');
    $('.tabContBox').css('top','auto');
    $('.tabContBox').off('click');
  }
})

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
  bnow = $(this).index();
  $(this).children('.bestInfo').css('top',-bnow*65+'px');
  $('.bestBox').css('border-bottom','1px solid #ddd');
  $(this).prev().css('border-bottom','none');
});

$('.mmlBox').on('click', function(){
  $('.mmlBox').children('.mmlList').stop().slideUp();
  $(this).children('.mmlList').stop().slideToggle();
});

$('.moFooter .flogo').on('click', function(){
  $('.moFooter .fText').stop().slideToggle();
  $('.moFooter .fMenu').stop().slideToggle();
});