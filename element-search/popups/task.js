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
