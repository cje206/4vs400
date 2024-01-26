document.addEventListener('DOMContentLoaded', function () {
    // 도서 정보 버튼 클릭 시
    document
        .querySelector('.book-content > span:nth-child(1)')
        .addEventListener('click', function () {
            scrollToElement('.basic');
        });

    // 리뷰 버튼 클릭 시
    document
        .querySelector('.book-content > span:nth-child(2)')
        .addEventListener('click', function () {
            scrollToElement('.review');
        });

    // 반품/교환 버튼 클릭 시
    document
        .querySelector('.book-content > span:nth-child(3)')
        .addEventListener('click', function () {
            scrollToElement('.returntitle');
        });

    // 스크롤 이벤트
    window.addEventListener('scroll', function () {
        // 스크롤 위치에 따라 도서 정보, 리뷰, 반품/교환 버튼 스타일 변경
        handleScroll();
    });

    // 초기 스크롤 위치에 따른 초기 스타일 설정
    handleScroll();
});

// 요소를 클릭하면 해당 섹션으로 스크롤하는 함수
function scrollToElement(selector) {
    const element = document.querySelector(selector);
    if (element) {
        let scrollOffset = window.innerWidth >= 1200 ? 80 : 60; // PC 버전일 때 80px, 그 외에는 60px
        window.scrollTo({
            top:
                element.offsetTop -
                document.querySelector('.book-content').offsetHeight -
                scrollOffset,
            behavior: 'smooth',
        });
    }
}

// 스크롤 위치에 따른 버튼 스타일 변경 함수
function handleScroll() {
    const scrollPosition = window.scrollY;
    const basicOffset =
        document.querySelector('.basic').offsetTop -
        document.querySelector('.book-content').offsetHeight;
    const reviewOffset =
        document.querySelector('.review').offsetTop -
        document.querySelector('.book-content').offsetHeight;
    const returnOffset =
        document.querySelector('.returntitle').offsetTop -
        document.querySelector('.book-content').offsetHeight;
    // 버튼 스타일 변경
    if (scrollPosition >= returnOffset - 60) {
        setActiveButton(3); // 반품/교환 버튼
    } else if (scrollPosition >= reviewOffset - 60) {
        setActiveButton(2); // 리뷰 버튼
    } else if (scrollPosition >= basicOffset - 60) {
        setActiveButton(1); // 도서 정보 버튼
    } else {
        setActiveButton(0); // 스크롤된 부분이 아닐 때
    }
    //pc 버전
    if (window.innerWidth >= 1200) {
        if (scrollPosition >= returnOffset - 80) {
            setActiveButton(3); // 반품/교환 버튼
        } else if (scrollPosition >= reviewOffset - 80) {
            setActiveButton(2); // 리뷰 버튼
        } else if (scrollPosition >= basicOffset - 80) {
            setActiveButton(1); // 도서 정보 버튼
        } else {
            setActiveButton(0); // 스크롤된 부분이 아닐 때
        }
    }
}

// 활성화된 버튼에 스타일 적용하는 함수
function setActiveButton(index) {
    const buttons = document.querySelectorAll('.book-content > span');
    buttons.forEach((button, i) => {
        if (i + 1 === index) {
            button.style.color = '#3B4A9F'; // 활성화된 버튼의 색상을 변경
            button.style.fontWeight = '700';
            button.style.borderBottom = '2px solid #3B4A9F';
        } else {
            button.style.color = 'black'; // 비활성화된 버튼의 색상을 변경
            button.style.fontWeight = '400';
            button.style.borderBottom = 'none';
        }
    });
}

// 리뷰 토글 1
$('.btnToggle').on('click', function () {
    $(this)
        .parent('.reviewbtn')
        .siblings('.reviewContent')
        .toggleClass('close');
    $(this).text() === '접기 -'
        ? $(this).text('더보기 +')
        : $(this).text('접기 -');
});

$(document).ready(function () {
    // "리뷰 더보기" 버튼이 클릭되었을 때
    $('.reviewplus').click(function () {
        // 숨겨진 리뷰 컨텐츠의 표시 여부를 토글
        $('.reviewBox.hidden').toggleClass('close');
        let btnText = $('.reviewplus').text();
        btnText === '더 많은 리뷰 보기 +'
            ? $('.reviewplus').text('접기 -')
            : $('.reviewplus').text('더 많은 리뷰 보기 +');
    });

    // 하단 하트 버튼 클릭
    $('.bb1').on('click', function () {
        $(this).toggleClass('active');
        $(this).hasClass('active')
            ? $(this).html(`&#x2665;`)
            : $(this).html(`&#x2661;`);
    });

    // 콤마 함수
    function toComma(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    // 책 가격 변수
    let bookPrice = 17500;

    // 하단 수량 버튼
    $('.btnMinus').on('click', function () {
        let bookQt = parseInt($('.bottomQt input').val());
        if (bookQt <= 1) {
            alert('최소 구매 수량은 1개 입니다.');
        } else {
            $('.qNum').val(bookQt - 1);
            $('.bottomPr span').text(toComma((bookQt - 1) * bookPrice));
        }
    });
    $('.btnPlus').on('click', function () {
        let bookQt = parseInt($('.bottomQt input').val());
        if (bookQt >= 99) {
            alert('최대 구매 수량은 99개 입니다.');
        } else {
            $('.qNum').val(bookQt + 1);
            $('.bottomPr span').text(toComma((bookQt + 1) * bookPrice));
        }
    });
    $('.qNum').on('input', function () {
        let bookQt = parseInt($(this).val());
        $('.qNum').val(bookQt);
        $('.bottomPr span').text(toComma(bookQt * bookPrice));
    });
});
