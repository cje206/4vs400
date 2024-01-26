// 현재 스크린 사이즈 변수
let screenWidth = $(window).width();

// 슬라이드 변수
let now = 0;
let slideWidth = $('.slideImg').width();
let slideImgs = $('.slideBox').width() / slideWidth;

// 탭영역 변수
let btl = 0;
let atl = 0;

// 실시간 BEST 변수
let bnow = 0;
let bestCount = $('.bestBox.open').length;

// 광고 배너 변수
let bbl = 0;
let abl = 0;

// gift 변수
let bscl = 0;
let ascl = 0;

$(document).ready(function () {
    setInterval(function () {
        slide();
    }, 3000);
    function slide() {
        now = now === slideImgs - 1 ? 0 : (now += 1);
        $('.slidePager p').removeClass('pagerActive');
        $(`.slidePager p:nth-child(${now + 2})`).addClass('pagerActive');
        $('.slideBox').animate({ left: now * -100 + '%' });
        $('.moPagerNum').text(`${now + 1} / ${slideImgs}`);
    }
    setInterval(function () {
        bestSlide();
    }, 7000);
    function bestSlide() {
        bnow >= bestCount - 1
            ? (bnow = 0)
            : (bnow = bnow === bestCount - 1 ? 0 : (bnow += 1));
        $('.bestBox').removeClass('active');
        $(`.bestBox:nth-child(${bnow + 1})`).addClass('active');
        $('.bestInfo').css('top', -bnow * 65 + 'px');
        $('.bestBox').css('border-bottom', '1px solid #ddd');
        $(`.bestBox:nth-child(${bnow})`).css('border-bottom', 'none');
    }
});

$(window).resize(function () {
    screenWidth = $(window).width();
    if (screenWidth < 1200) {
        $('.tabContBox').removeClass('bookL');
        $('.tabContBox').removeClass('bookR');
        $('.tabContBox').removeClass('active');
        $('.tabContBox').css({ top: 'auto', height: 'fit-content' });
        $('.tabContBox:nth-child(1)').addClass('active');
        $('.tabContBox:nth-child(2)').addClass('bookR');
        $('.bookR').css('top', '94px');
        $('.tabContBox').on('click');
    } else {
        $('.tabContBox').removeClass('bookL');
        $('.tabContBox').removeClass('bookR');
        $('.tabContBox').removeClass('active');
        $('.tabContBox').css('top', 'auto');
    }
});

$('.slideArrL').on('click', function () {
    now = now === 0 ? slideImgs - 1 : (now += -1);
    $('.slidePager p').removeClass('pagerActive');
    $(`.slidePager p:nth-child(${now + 2})`).addClass('pagerActive');
    $('.slideBox')
        .stop()
        .animate({ left: now * -100 + '%' });
});

$('.slideArrR').on('click', function () {
    now = now === slideImgs - 1 ? 0 : (now += 1);
    $('.slidePager p').removeClass('pagerActive');
    $(`.slidePager p:nth-child(${now + 2})`).addClass('pagerActive');
    $('.slideBox')
        .stop()
        .animate({ left: now * -100 + '%' });
});

$('.tabBtn').on('click', function () {
    $('.tabBtn').removeClass('active');
    $(this).addClass('active');
});

$('.tabContBox').on('click', function () {
    if (screenWidth < 1200) {
        $('.tabContBox').removeClass('active bookR bookL');
        $(this).addClass('active').css({ top: 0 });
        let bookHeight = parseInt(
            $(this).children('.tabContentImg').css('height')
        );
        $(this)
            .prev()
            .addClass('bookL')
            .css({ top: bookHeight / 2 + 'px' });
        $(this)
            .next()
            .addClass('bookR')
            .css({ top: bookHeight / 2 + 'px' });
    }
});

let tablength = $('.tabContBox').length;

$('.tabContWrap').on('touchstart', function (e) {
    btl = e.changedTouches[0].screenX;
});

$('.tabContWrap').on('touchend', function (e) {
    atl = e.changedTouches[0].screenX;
    let nowBox = $('.tabContBox.active').index();
    console.log(nowBox, btl, atl, tablength);
    if (screenWidth < 1200) {
        if (btl < atl) {
            // 이전으로 슬라이드
            if (nowBox == 1) {
                $('.tabContBox').removeClass('active bookR bookL');
                let bookHeight = parseInt(
                    $('.tabContBox')
                        .eq(nowBox + 1)
                        .height()
                );
                $('.tabContBox')
                    .eq(nowBox - 1)
                    .addClass('active')
                    .css({ top: 0 });
                $('.tabContBox')
                    .eq(nowBox)
                    .addClass('bookR')
                    .css({ top: bookHeight / 2 + 'px' });
            } else if (nowBox > 1 && nowBox <= tablength - 1) {
                $('.tabContBox').removeClass('active bookR bookL');
                let bookHeight = parseInt(
                    $('.tabContBox')
                        .eq(nowBox + 1)
                        .height()
                );
                $('.tabContBox')
                    .eq(nowBox - 2)
                    .addClass('bookL')
                    .css({ top: bookHeight / 2 + 'px' });
                $('.tabContBox')
                    .eq(nowBox - 1)
                    .addClass('active')
                    .css({ top: 0 });
                $('.tabContBox')
                    .eq(nowBox)
                    .addClass('bookR')
                    .css({ top: bookHeight / 2 + 'px' });
            }
        } else if (btl > atl) {
            // 다음으로 슬라이드
            if (nowBox == tablength - 2) {
                $('.tabContBox').removeClass('active bookR bookL');
                let bookHeight = parseInt(
                    $('.tabContBox')
                        .eq(nowBox + 1)
                        .height()
                );
                $('.tabContBox')
                    .eq(nowBox)
                    .addClass('bookL')
                    .css({ top: bookHeight / 2 + 'px' });
                $('.tabContBox')
                    .eq(nowBox + 1)
                    .addClass('active')
                    .css({ top: 0 });
            } else if (nowBox >= 0 && nowBox < tablength - 2) {
                $('.tabContBox').removeClass('active bookR bookL');
                let bookHeight = parseInt(
                    $('.tabContBox')
                        .eq(nowBox + 1)
                        .height()
                );
                $('.tabContBox')
                    .eq(nowBox)
                    .addClass('bookL')
                    .css({ top: bookHeight / 2 + 'px' });
                $('.tabContBox')
                    .eq(nowBox + 1)
                    .addClass('active')
                    .css({ top: 0 });
                $('.tabContBox')
                    .eq(nowBox + 2)
                    .addClass('bookR')
                    .css({ top: bookHeight / 2 + 'px' });
            }
        }
    }
});

$('.bestBox').on('click', function () {
    $('.bestBox').removeClass('active');
    $(this).addClass('active');
    bnow = $(this).index();
    $(this)
        .children('.bestInfo')
        .css('top', -bnow * 65 + 'px');
    $('.bestBox').css('border-bottom', '1px solid #ddd');
    $(this).prev().css('border-bottom', 'none');
});

$('.bestMore').on('click', function () {
    $('.bestBox:nth-child(n+6)').toggleClass('open');
    $(this).text() === '접기 -'
        ? $(this).text('더보기 +')
        : $(this).text('접기 -');
    bestCount = $('.bestBox.open').length;
});

$('.bannerSlide').on('touchstart', function () {
    bbl = $(this).scrollLeft();
});

$('.bannerSlide').on('touchend', function () {
    if (screenWidth < 1200) {
        abl = $(this).scrollLeft();
        if (bbl < abl) {
            $('.bannerSlide')
                .stop()
                .animate({ scrollLeft: bbl + screenWidth });
        } else if (bbl > abl) {
            $('.bannerSlide')
                .stop()
                .animate({ scrollLeft: bbl - screenWidth });
        }
    }
});

$('.recMore').on('click', function () {
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

$('.giftSlide').on('touchstart', function () {
    bscl = $(this).scrollLeft();
});

$('.giftSlide').on('touchend', function () {
    if (screenWidth < 1200) {
        ascl = $(this).scrollLeft();
        if (bscl < ascl) {
            $('.giftSlide')
                .stop()
                .animate({ scrollLeft: bscl + screenWidth });
        } else if (bscl > ascl) {
            $('.giftSlide')
                .stop()
                .animate({ scrollLeft: bscl - screenWidth });
        }
    }
});

$('.priMore').on('click', function () {
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

$('.arrL').on('click', function () {
    let nowScrollLeft = Math.round(
        $(this).parent('.arrs').siblings('.abArea').scrollLeft()
    );
    let areaWidth = $(this).parent('.arrs').siblings('.abArea').width();
    let wholeWidth = $(this)
        .parent('.arrs')
        .siblings('.abArea')
        .children('.abWrap')
        .width();
    let boxWidth = $(this)
        .parent('.arrs')
        .siblings('.abArea')
        .find('.abBox')
        .width();
    let count = $(this)
        .parent('.arrs')
        .siblings('.abArea')
        .find('.abBox').length;
    let countMargin = (wholeWidth - boxWidth * count) / (count - 1);
    let viewCount =
        countMargin == 0
            ? areaWidth / boxWidth
            : parseInt(areaWidth / (boxWidth + countMargin)) + 1;
    let swipeWidth = boxWidth + countMargin;
    let maxLeft = (count - viewCount) * swipeWidth;

    $(this)
        .parent('.arrs')
        .siblings('.abArea')
        .stop()
        .animate({ scrollLeft: nowScrollLeft - swipeWidth });

    console.log(nowScrollLeft, maxLeft, swipeWidth);

    if (nowScrollLeft === swipeWidth) {
        $(this).css('background', "url('../img/bookArrDis.png') center/100%");
    } else if (nowScrollLeft === maxLeft) {
        $(this)
            .siblings('.arrR')
            .css('background', "url('../img/bookArrActive.png') center/100%");
    } else if (nowScrollLeft > 0 && nowScrollLeft < maxLeft) {
        $(this).css(
            'background',
            "url('../img/bookArrActive.png') center/100%"
        );
    }
});

$('.arrR').on('click', function () {
    let nowScrollLeft = Math.round(
        $(this).parent('.arrs').siblings('.abArea').scrollLeft()
    );
    let areaWidth = $(this).parent('.arrs').siblings('.abArea').width();
    let wholeWidth = $(this)
        .parent('.arrs')
        .siblings('.abArea')
        .children('.abWrap')
        .width();
    let boxWidth = $(this)
        .parent('.arrs')
        .siblings('.abArea')
        .find('.abBox')
        .width();
    let count = $(this)
        .parent('.arrs')
        .siblings('.abArea')
        .find('.abBox').length;
    let countMargin = (wholeWidth - boxWidth * count) / (count - 1);
    let viewCount =
        countMargin == 0
            ? areaWidth / boxWidth
            : parseInt(areaWidth / (boxWidth + countMargin)) + 1;
    let swipeWidth = boxWidth + countMargin;
    let maxLeft = (count - viewCount) * swipeWidth;

    $(this)
        .parent('.arrs')
        .siblings('.abArea')
        .stop()
        .animate({ scrollLeft: nowScrollLeft + swipeWidth });

    console.log(nowScrollLeft, maxLeft, swipeWidth);

    if (nowScrollLeft === maxLeft - swipeWidth) {
        $(this).css('background', "url('../img/bookArrDis.png') center/100%");
    } else if (nowScrollLeft === 0) {
        $(this)
            .siblings('.arrL')
            .css('background', "url('../img/bookArrActive.png') center/100%");
    } else if (nowScrollLeft > 0 && nowScrollLeft < maxLeft) {
        $(this).css(
            'background',
            "url('../img/bookArrActive.png') center/100%"
        );
    }
});

$('.giftAll').on('click', function () {
    $(this).siblings('.giftSlide').toggleClass('open');
    $(this).text() === '전체보기 +'
        ? $(this).text('접기 -')
        : $(this).text('전체보기 +');
});
