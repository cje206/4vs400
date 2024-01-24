// 현재 스크린 사이즈 변수
let screenWidth = $(window).width();

// 실시간 인기 검색어 변수
let hpi = 1;

// 슬라이드 변수
let now = 0;
let slideWidth = $('.slideImg').width();
let slideImgs = $('.slideBox').width()/slideWidth;

// 실시간 BEST 변수
let bnow = 0;
let bestCount = $('.bestBox.open').length;

// 광고 배너 변수
let bbl = 0;
let abl = 0;

// gift 변수
let bscl = 0;
let ascl = 0;

$(document).ready(function(){
  setInterval(function(){hp(); slide();},3000);
  function hp () {
    hpi = hpi === 10 ? 1 : ++hpi;
    let hpt = $(`.hpText:nth-child(${hpi})`).text();
    $('.hpSlide').text(hpt);
  }
  function slide () {
    now = now === slideImgs-1 ? 0 : now+=1;
    $('.slidePager p').removeClass('pagerActive');
    $(`.slidePager p:nth-child(${now+2})`).addClass('pagerActive');
    $('.slideBox').animate({left:now*-100+'%'});
    $('.moPagerNum').text(`${(now+1)} / ${slideImgs}`);
  }
  setInterval(function(){bestSlide();},7000);
  function bestSlide() {
    bnow >= bestCount-1 ? bnow = 0 : bnow = bnow === bestCount-1 ? 0 : bnow+=1 ;
    $('.bestBox').removeClass('active');
    $(`.bestBox:nth-child(${bnow+1})`).addClass('active');
    $('.bestInfo').css('top',-(bnow)*65+'px');
    $('.bestBox').css('border-bottom','1px solid #ddd');
    $(`.bestBox:nth-child(${bnow})`).css('border-bottom','none');
  }
});

$(window).resize(function(){
  screenWidth = $(window).width();
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

$('.mmlBox').on('click', function(){
  $('.mmlBox').children('.mmlList').stop().slideUp();
  $(this).children('.mmlList').stop().slideToggle();
});

$('.hPop').on('mouseenter',function(){
  $('.hpBox').stop().slideDown();
});
$('.hPop').on('mouseleave', function(){
  $('.hpBox').stop().slideUp();
});

$('.hmc').on('mouseenter',function(){
  let i = $(this).index() - 1;
  let subLeft = $(this).offset().left;

  if (i === 0) {
    $('.hmlBox').stop().slideDown();
  } else {
    $('.hmlBox').stop().css('display', 'none');
    $(`.hmlBox:nth-child(${i})`).stop().slideDown();
  }
  $('.hmlList').css('left',subLeft);
  $('.hmlList').stop().slideDown();
});
$('.hMenuBg').on('mouseleave', function(){
  $('.hmlList').stop().slideUp();
});

$('.slideArrL').on('click', function(){
  now = now === 0 ? slideImgs-1 : now+=-1;
  $('.slidePager p').removeClass('pagerActive');
  $(`.slidePager p:nth-child(${now+2})`).addClass('pagerActive');
  $('.slideBox').stop().animate({left:now*-100+'%'});
});

$('.slideArrR').on('click', function(){
  now = now === slideImgs-1 ? 0 : now+=1;
  $('.slidePager p').removeClass('pagerActive');
  $(`.slidePager p:nth-child(${now+2})`).addClass('pagerActive');
  $('.slideBox').stop().animate({left:now*-100+'%'});
});


$('.tabBtn').on('click', function(){
  $('.tabBtn').removeClass('active')
  $(this).addClass('active');
});

$('.tabContBox').on('click', function(){
  if (screenWidth < 1200) {
    $('.tabContBox').removeClass('active bookR bookL');
    $(this).addClass('active').css({top:0});
    let bookHeight = parseInt($(this).children('.tabContentImg').css('height'));
    $(this).prev().addClass('bookL').css({top:bookHeight/2+'px'});
    $(this).next().addClass('bookR').css({top:bookHeight/2+'px'});
  }
});

$('.bestBox').on('click', function(){
  $('.bestBox').removeClass('active');
  $(this).addClass('active');
  bnow = $(this).index();
  $(this).children('.bestInfo').css('top',-bnow*65+'px');
  $('.bestBox').css('border-bottom','1px solid #ddd');
  $(this).prev().css('border-bottom','none');
});

$('.bestMore').on('click', function(){
  $('.bestBox:nth-child(n+6)').toggleClass('open');
  $(this).text() === '더보기 +' ? $(this).text('접기 -') : $(this).text('더보기 +');
  bestCount = $('.bestBox.open').length;
});

$('.bannerSlide').on('touchstart',function(){
  bbl = $(this).scrollLeft();
});

$('.bannerSlide').on('touchend',function(){
  if (screenWidth < 1200) {
    abl = $(this).scrollLeft();
    if (bscl < ascl) {
      $('.bannerSlide').stop().animate({scrollLeft : bbl+screenWidth});
    } else if (bscl > ascl) {
      $('.bannerSlide').stop().animate({scrollLeft : bbl-screenWidth});
    }
  }
});

$('.recMore').on('click', function(){
  let recAllCount = $('.recContBox').length;
  let recOpenCount = $('.recContBox.open').length;
  let willOpen = recOpenCount + 2;
  if (recOpenCount === recAllCount) {
    $('.recContBox:nth-child(n+3)').removeClass('open');
    $('.recMore').text('더보기 +');
  } else if (recOpenCount >= recAllCount - 2) {
    $(`.recContBox:nth-child(-n+${willOpen})`).addClass('open');
    $('.recMore').text('접기 -');
  } else {
    $(`.recContBox:nth-child(-n+${willOpen})`).addClass('open');
  }
});

$('.giftSlide').on('touchstart',function(){
  bscl = $(this).scrollLeft();
});

$('.giftSlide').on('touchend',function(){
  if (screenWidth < 1200) {
    ascl = $(this).scrollLeft();
    if (bscl < ascl) {
      $('.giftSlide').stop().animate({scrollLeft : bscl+screenWidth});
    } else if (bscl > ascl) {
      $('.giftSlide').stop().animate({scrollLeft : bscl-screenWidth});
    }
  }
});

$('.priMore').on('click', function(){
  let recAllCount = $('.priContBox').length;
  let recOpenCount = $('.priContBox.open').length;
  let willOpen = recOpenCount + 3;
  if (recOpenCount === recAllCount) {
    $('.priContBox:nth-child(n+4)').removeClass('open');
    $('.priMore').text('더 많은 상품 보기');
  } else if (recOpenCount >= recAllCount - 3) {
    $(`.priContBox:nth-child(-n+${willOpen})`).addClass('open');
    $('.priMore').text('접기');
  } else {
    $(`.priContBox:nth-child(-n+${willOpen})`).addClass('open');
  }
});

$('.arrL').on('click',function(){
  let nowScrollLeft = Math.round($(this).parent('.arrs').siblings('.abArea').scrollLeft());
  let areaWidth = $(this).parent('.arrs').siblings('.abArea').width();
  let wholeWidth = $(this).parent('.arrs').siblings('.abArea').children('.abWrap').width();
  let boxWidth = $(this).parent('.arrs').siblings('.abArea').find('.abBox').width();
  let count = $(this).parent('.arrs').siblings('.abArea').find('.abBox').length;
  let countMargin = (wholeWidth - (boxWidth * count))/(count - 1);
  let viewCount = countMargin == 0 ? areaWidth / boxWidth : parseInt(areaWidth/(boxWidth+countMargin)) + 1;
  let swipeWidth = boxWidth + countMargin;
  let maxLeft = (count - viewCount) * swipeWidth;

  $(this).parent('.arrs').siblings('.abArea').stop().animate({scrollLeft : nowScrollLeft-swipeWidth});

  console.log(nowScrollLeft, maxLeft, swipeWidth)

  if (nowScrollLeft === swipeWidth) {
    $(this).css('background', "url('../img/bookArrDis.png') center/100%");
  } else if (nowScrollLeft === maxLeft) {
    $(this).siblings('.arrR').css('background', "url('../img/bookArrActive.png') center/100%");
  } else if (nowScrollLeft > 0 && nowScrollLeft < maxLeft) {
    $(this).css('background', "url('../img/bookArrActive.png') center/100%");
  }
});

$('.arrR').on('click',function(){
  let nowScrollLeft = Math.round($(this).parent('.arrs').siblings('.abArea').scrollLeft());
  let areaWidth = $(this).parent('.arrs').siblings('.abArea').width();
  let wholeWidth = $(this).parent('.arrs').siblings('.abArea').children('.abWrap').width();
  let boxWidth = $(this).parent('.arrs').siblings('.abArea').find('.abBox').width();
  let count = $(this).parent('.arrs').siblings('.abArea').find('.abBox').length;
  let countMargin = (wholeWidth - (boxWidth * count))/(count - 1);
  let viewCount = countMargin == 0 ? areaWidth / boxWidth : parseInt(areaWidth/(boxWidth+countMargin)) + 1;
  let swipeWidth = boxWidth + countMargin;
  let maxLeft = (count - viewCount) * swipeWidth;

  $(this).parent('.arrs').siblings('.abArea').stop().animate({scrollLeft : nowScrollLeft+swipeWidth});

  console.log(nowScrollLeft, maxLeft, swipeWidth)

  if (nowScrollLeft === maxLeft-swipeWidth) {
    $(this).css('background', "url('../img/bookArrDis.png') center/100%");
  } else if (nowScrollLeft === 0) {
    $(this).siblings('.arrL').css('background', "url('../img/bookArrActive.png') center/100%");
  } else if (nowScrollLeft > 0 && nowScrollLeft < maxLeft) {
    $(this).css('background', "url('../img/bookArrActive.png') center/100%");
  }
});

$('.giftAll').on('click', function(){
  $(this).siblings('.giftSlide').toggleClass('open');
  $(this).text() === '전체보기 +' ? $(this).text('접기 -') : $(this).text('전체보기 +');
});

$('.moFooter .flogo').on('click', function(){
  $('.moFooter .fText').stop().slideToggle();
  $('.moFooter .fMenu').stop().slideToggle();
});