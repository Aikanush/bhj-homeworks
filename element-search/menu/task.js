const menu = document.querySelector('.menu_main');



menu.addEventListener('click', function(event) {
  let target = event.target;

  let targetParent = target.closest('.menu__item');

  if (targetParent) {
    let subm = targetParent.getElementsByClassName('menu_sub')[0];
    close();
    if (subm) {
      subm.style.display = 'block';
      event.preventDefault();
    }
  }
});

function close() {
  let s = document.getElementsByClassName('menu_sub');
  for (let i = 0; i < s.length; i++) {
    s[i].style.display = 'none';
  }
}
