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

// 모바일 메뉴
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

// 인기검색어
$('.hPop').on('mouseenter', function () {
    $('.hpBox').stop().slideDown();
});
$('.hPop').on('mouseleave', function () {
    $('.hpBox').stop().slideUp();
});

// pc 메뉴
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

// 왼쪽 화살표
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

// 오른쪽 화살표
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

// 모바일 푸터 토글
$('.moFooter .flogo').on('click', function () {
    $('.moFooter .fText').stop().slideToggle();
    $('.moFooter .fMenu').stop().slideToggle();
});
