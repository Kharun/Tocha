// функция "показать/скрыть пароль"

function show_hide_password(target){
	let hide = document.querySelector(".password-control");
	let input = document.getElementById('password-input');
	if (input.getAttribute('type') == 'password') {
		target.classList.add('view');
		input.setAttribute('type', 'text');
		hide.innerText = "Скрыть текст";
	} else {
		target.classList.remove('view');
		input.setAttribute('type', 'password');
		hide.innerText = "Показать пароль";
	}
	return false;
}


// кнопки логина и регистрации
let loginBtn = document.querySelector(".login");
let overlay = document.querySelector(".overlay");
let closeBtn = document.querySelector(".close");

loginBtn.onclick = function() {
    overlay.style.display = 'flex'
}

closeBtn.onclick = function() {
    overlay.style.display = 'none'
}

overlay.onclick = function(event) {
    if (event.target.classList.contains('overlay')) {
        overlay.style.display = 'none'
    }
}

let registBtn = document.querySelector(".regist");
let closeOverlayBtn = document.querySelector(".closeOverlayBtn");
let overlayRegist = document.querySelector(".overlay__regist");

registBtn.onclick = function() {
    overlayRegist.style.display = 'flex'
}

closeOverlayBtn.onclick = function() {
    overlayRegist.style.display = 'none'
}

overlayRegist.onclick = function(event) {
    if (event.target.classList.contains('overlay__regist')) {
        overlayRegist.style.display = 'none'
    }
}


// burger-menu
let burger = document.querySelector(".header__burger")
let headerMenu = document.querySelector(".header__menu")
burger.onclick = function () {
	burger.classList.toggle('active')
	headerMenu.classList.toggle('active')
}


//scroll
$('.tabs__caption').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  });

$(window).on('scroll', function() {
    if ($(this).scrollTop() > 20) {
        $('.goTop').fadeIn('slow')
    } else {
        $('.goTop').fadeOut('slow')
    }
})