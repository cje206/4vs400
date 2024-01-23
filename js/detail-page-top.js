var target = document.querySelectorAll('.btn_open');
var btnPopClose = document.querySelectorAll('.pop_wrap .btn_close');
var targetID;

// 팝업 열기
for (var i = 0; i < target.length; i++) {
    target[i].addEventListener('click', function () {
        targetID = this.getAttribute('href');
        document.querySelector(targetID).style.display = 'block';
    });
}

// 팝업 닫기
for (var j = 0; j < target.length; j++) {
    btnPopClose[j].addEventListener('click', function () {
        this.parentNode.parentNode.style.display = 'none';
    });
}

// 장바구니 클릭
var currentQuantity = 0;

function plus() {
    currentQuantity++;
    updateQuantity();
}

function minus() {
    if (currentQuantity > 0) {
        currentQuantity--;
        updateQuantity();
    }
}
function updateQuantity() {
    document.getElementById('quantity').innerText = currentQuantity;
}
