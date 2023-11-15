let leftBtn = document.querySelector('.elipse_arrow-left');
let rightBtn = document.querySelector('.elipse_arrow-right');

(function burgerClick() {
	const burgerItem = document.querySelector('.header_burger'); //обраемся к методу document что бы передать блок .burger в переменную
	const menu = document.querySelector('.header_nav')
	const menuCloseItem = document.querySelector('.header_nav-close')
	
	burgerItem.addEventListener('click', () => {
		menu.classList.add('header_nav-active');
	});
	menuCloseItem.addEventListener('click', () => {
		menu.classList.remove('header_nav-active');
	})
}());

let customerComments = {
	avatarImg: './img/png/lady.png',
	customerName: 'Елена Новикова',
	customerType: 'студентка',
	comment: 'Очень понравился в использовании<br> диван «Бродвей»'
}

let customerComments2 = {
	avatarImg: './img/png/chopper.jpg',
	customerName: 'Тони Тони Чоппер',
	customerType: 'пират',
	comment: 'Мне очень понравился стул «Сакура»<br> на нём приятно сидеть'
}

document.getElementById('coment-img').src = customerComments.avatarImg;
document.getElementById('coment-name').innerHTML = (customerComments.customerName);
document.getElementById('coment-type').innerHTML = (customerComments.customerType);
document.getElementById('coment').innerHTML = (customerComments.comment);

let clicked = 1;

rightBtn.onclick = function () {
	document.getElementById('coment-img').src = customerComments2.avatarImg;
	document.getElementById('coment-name').innerHTML = (customerComments2.customerName);
	document.getElementById('coment-type').innerHTML = (customerComments2.customerType);
	document.getElementById('coment').innerHTML = (customerComments2.comment);

  clicked = 2;

	return clicked;
}

leftBtn.onclick = function () {
	if (clicked == 2) {
		document.getElementById('coment-img').src = customerComments.avatarImg;
		document.getElementById('coment-name').innerHTML = (customerComments.customerName);
		document.getElementById('coment-type').innerHTML = (customerComments.customerType);
		document.getElementById('coment').innerHTML = (customerComments.comment);
		clicked = 2;	
	}	
}


