const show = document.querySelector('.show-success');
const modal_showed = document.querySelectorAll('.modal');

show.onclick = function() {
  modal_showed[0].classList.remove('modal_active');
  modal_showed[1].classList.add('modal_active');
}

const closed = document.getElementsByClassName('modal__close');

let firstElement = closed[0];

let secondElement = closed[2];

firstElement.onclick = () => {
	modal_showed[0].classList.remove('modal_active');
}

secondElement.onclick = () => {
	modal_showed[1].classList.remove('modal_active');
}


// menu.onclick = function(event) {
// 	let target = event.target;
// 	if (target.className == 'menu__item') {
// 		let sub = target.getElementsByClassName('menu_sub');
// 		closeMenu();
// 		sub[0].style.displey = 'block';

// 	}
// }

// document.onclick = function(event) { 
// 	let target = event.target;
// 	console.log(event.target);
// 	if (target.className != 'menu__item' && target.className != 'menu_sub') {
// 		closeMenu();
// 	}
// }

// function closeMenu() {
// 	for (let i = 0; i < menuSub.length; i++) {
// 		menuSub[i].style.display = 'none';
// 	}
// }
 
	
// for (let i = 0; i < link.length; i++) {
// 	link.onclick = () => {
//       if (link[i].classList.contains('menu_sub')) {

//       }
// 	}
// }


// const main = document.getElementsByClassName('menu_main');

