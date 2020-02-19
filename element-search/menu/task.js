const body = document.body;



body.addEventListener('click', function(event) {
  let target = event.target;

  let targetParent = target.closest('.menu__item');
  let subm = targetParent.getElementsByClassName('menu_sub')[0];

  if (targetParent) {
    if (subm) {
      subm.classList.toggle('menu_active');
      event.preventDefault();
    }
  }
});

// function close() {
//   let s = document.getElementsByClassName('menu_sub');
//   for (let i = 0; i < s.length; i++) {
//     s[i].classList.remove('menu_active');
//   }
// }
