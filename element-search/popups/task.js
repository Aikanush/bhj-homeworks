const closed = document.getElementsByClassName('modal__close')[0];

const modal = document.getElementById('modal_main');

const success = document.getElementById('modal_success');
const show = document.getElementsByClassName('show-success')[0];

closed.onclick = () => {
  modal.style.display = 'none';
  success.style.display = 'none';
}

show.onclick = () => {
	success.style.display = 'block';
	modal.style.display = 'none';
}
