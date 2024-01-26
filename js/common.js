// 실시간 인기 검색어 변수
let hpi = 1;

$(document).ready(function () {
    setInterval(function () {
        hp();
    }, 3000);
    function hp() {
        hpi = hpi === 10 ? 1 : ++hpi;
        let hpt = $(`.hpText:nth-child(${hpi})`).text();
        $('.hpSlide').text(hpt);
    }
});

$('.moMenuOpen').on('click', function () {
    $('.moMenuBox').stop().animate({ left: 0 });
    $('.moMenuClose').removeClass('hide');
    $('.hSearch').addClass('hide');
    $('.goCart').addClass('hide');
    $('.moMenuOpen').addClass('hide');
    $('body').css({ overflow: 'hidden' });
});
$('.moMenuClose').on('click', function () {
    $('.moMenuBox').stop().animate({ left: '-100%' });
    $('.moMenuOpen').removeClass('hide');
    $('.hSearch').removeClass('hide');
    $('.goCart').removeClass('hide');
    $('.moMenuClose').addClass('hide');
    $('body').css({ overflow: 'visible' });
});

$('.mmlBox').on('click', function () {
    $('.mmlBox').children('.mmlList').stop().slideUp();
    $(this).children('.mmlList').stop().slideToggle();
});

$('.hPop').on('mouseenter', function () {
    $('.hpBox').stop().slideDown();
});
$('.hPop').on('mouseleave', function () {
    $('.hpBox').stop().slideUp();
});

$('.hmc').on('mouseenter', function () {
    let i = $(this).index() - 1;
    let subLeft = $(this).offset().left;

    if (i === 0) {
        $('.hmlBox').stop().slideDown();
    } else {
        $('.hmlBox').stop().css('display', 'none');
        $(`.hmlBox:nth-child(${i})`).stop().slideDown();
    }
    $('.hmlList').css('left', subLeft);
    $('.hmlList').stop().slideDown();
});
$('.hMenuBg').on('mouseleave', function () {
    $('.hmlList').stop().slideUp();
});

$('.moFooter .flogo').on('click', function () {
    $('.moFooter .fText').stop().slideToggle();
    $('.moFooter .fMenu').stop().slideToggle();
});
