document.addEventListener('DOMContentLoaded', function () {
    // 도서 정보 버튼 클릭 시
    document.querySelector('.book-content > span:nth-child(1)').addEventListener('click', function () {
        scrollToElement('.basic');
    });

    // 리뷰 버튼 클릭 시
    document.querySelector('.book-content > span:nth-child(2)').addEventListener('click', function () {
        scrollToElement('.review');
    });

    // 반품/교환 버튼 클릭 시
    document.querySelector('.book-content > span:nth-child(3)').addEventListener('click', function () {
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
        window.scrollTo({
            top: element.offsetTop - document.querySelector('.book-content').offsetHeight,
            behavior: 'smooth',
        });
    }
}

// 스크롤 위치에 따른 버튼 스타일 변경 함수
function handleScroll() {
    const scrollPosition = window.scrollY;
    const basicOffset =
        document.querySelector('.basic').offsetTop - document.querySelector('.book-content').offsetHeight;
    const reviewOffset =
        document.querySelector('.review').offsetTop - document.querySelector('.book-content').offsetHeight;
    const returnOffset =
        document.querySelector('.returntitle').offsetTop - document.querySelector('.book-content').offsetHeight;

    // 도서 정보 버튼 스타일 변경
    if (scrollPosition >= basicOffset && scrollPosition < reviewOffset) {
        setActiveButton(1);
    }

    // 리뷰 버튼 스타일 변경
    else if (scrollPosition >= reviewOffset && scrollPosition < returnOffset) {
        setActiveButton(2);
    }

    // 반품/교환 버튼 스타일 변경
    else if (scrollPosition >= returnOffset) {
        setActiveButton(3);
    } else {
        // 다른 부분 스크롤 시 모든 버튼 스타일 초기화
        setActiveButton(0);
    }
}

// 활성화된 버튼에 스타일 적용하는 함수
function setActiveButton(index) {
    const buttons = document.querySelectorAll('.book-content > span');
    buttons.forEach((button, i) => {
        if (i + 1 === index) {
            button.style.color = 'blue'; // 활성화된 버튼의 색상을 변경
            button.style.borderBottom = '2px solid skyblue';
        } else {
            button.style.color = 'black'; // 비활성화된 버튼의 색상을 변경
            button.style.borderBottom = '2px solid transparent';
        }
    });
}
document.addEventListener('DOMContentLoaded', function () {
    // 각 버튼에 대한 클릭 이벤트 리스너 추가
    document.querySelectorAll('.reviewbtn button').forEach(function (button, index) {
        button.addEventListener('click', function () {
            toggleReviewContent(index + 1);
        });
    });
});

function toggleReview(btnNumber) {
    var hiddenSpan = document.querySelector('.reviewcontent .hidden' + btnNumber);
    var btnText = document.querySelector('.btnToggle[data-target="' + btnNumber + '"]');
    var reviewHead = document.getElementById('review' + btnNumber + 'head');

    if (hiddenSpan.style.display === 'none' || hiddenSpan.style.display === '') {
        hiddenSpan.style.display = 'inline'; // Change 'inline' to 'block' if needed
        btnText.innerHTML = '접기 -';
    } else {
        hiddenSpan.style.display = 'none';
        btnText.innerHTML = '더보기 +';
        // Scroll to reviewHead
        reviewHead.scrollIntoView({ behavior: 'smooth' });
    }
}

// 각 버튼에 대한 이벤트 리스너 등록
document.querySelectorAll('.btnToggle').forEach(function (button) {
    button.addEventListener('click', function () {
        var targetNumber = this.getAttribute('data-target');
        toggleReview(targetNumber);
    });
});

$(document).ready(function () {
    // "리뷰 더보기" 버튼이 클릭되었을 때
    $('.reviewplus').click(function () {
        // 숨겨진 리뷰 컨텐츠의 표시 여부를 토글
        $('.hiddenreview').toggle();
    });
});
