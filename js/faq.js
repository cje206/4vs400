// $('faqQnaBox').on('click', function()) {
//     $('faqQnaBox')not(this).children('.faqQ').stop().slideUP();
//     $(this).children('.faqA').stop().slideToggle();
// }

$('.faqQna').on('click', function() {
    $('.faqQna').children('.faqA').stop().slideUp(); // 다른 박스의 faqA를 슬라이드 업
    $(this).children('.faqA').stop().slideToggle(); 
});