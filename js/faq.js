$('.faqMenu').on('click', function () {
    $('.faqMenu').removeClass('active');
    $(this).addClass('active');
});

$('.faqQna').on('click', function () {
    $('.faqQna').children('.faqA').stop().slideUp(); // 다른 박스의 faqA를 슬라이드 업
    $(this).children('.faqA').stop().slideToggle();
});

$('.faqPager').on('click', function () {
    let i = $(this).index();
    let startNum = (i - 1) * 10;
    let endNum = i * 10;
    $('.faqPager').removeClass('active');
    $(this).addClass('active');
    $('.faqQna').removeClass('active');
    $('.faqQna').slice(startNum, endNum).addClass('active');
    if (i === 1) {
        $('.faqPrev').css({ color: '#ddd', cursor: 'default' });
        $('.faqNext').css({ color: '#777', cursor: 'pointer' });
    } else if (i === 3) {
        $('.faqPrev').css({ color: '#777', cursor: 'pointer' });
        $('.faqNext').css({ color: '#ddd', cursor: 'default' });
    } else {
        $('.faqPrev').css({ color: '#777', cursor: 'pointer' });
        $('.faqNext').css({ color: '#777', cursor: 'pointer' });
    }
});

$('.faqPrev').on('click', function () {
    let i = $('.faqPager.active').index();
    let startNum = (i - 2) * 10;
    let endNum = (i - 1) * 10;
    if (i === 2) {
        $('.faqPager').removeClass('active');
        $('.faqPager').eq(0).addClass('active');
        $('.faqQna').removeClass('active');
        $('.faqQna').slice(startNum, endNum).addClass('active');
        $('.faqPrev').css({ color: '#ddd', cursor: 'default' });
        $('.faqNext').css({ color: '#777', cursor: 'pointer' });
    } else if (i === 3) {
        $('.faqPager').removeClass('active');
        $('.faqPager').eq(1).addClass('active');
        $('.faqQna').removeClass('active');
        $('.faqQna').slice(startNum, endNum).addClass('active');
        $('.faqPrev').css({ color: '#777', cursor: 'pointer' });
        $('.faqNext').css({ color: '#777', cursor: 'pointer' });
    }
});

$('.faqNext').on('click', function () {
    let i = $('.faqPager.active').index();
    let startNum = i * 10;
    let endNum = (i + 1) * 10;
    if (i === 2) {
        $('.faqPager').removeClass('active');
        $('.faqPager').eq(2).addClass('active');
        $('.faqQna').removeClass('active');
        $('.faqQna').slice(startNum, endNum).addClass('active');
        $('.faqPrev').css({ color: '#777', cursor: 'pointer' });
        $('.faqNext').css({ color: '#ddd', cursor: 'default' });
    } else if (i === 1) {
        $('.faqPager').removeClass('active');
        $('.faqPager').eq(1).addClass('active');
        $('.faqQna').removeClass('active');
        $('.faqQna').slice(startNum, endNum).addClass('active');
        $('.faqPrev').css({ color: '#777', cursor: 'pointer' });
        $('.faqNext').css({ color: '#777', cursor: 'pointer' });
    }
});
