
const tab = document.getElementsByClassName('tab');
const content = document.getElementsByClassName('tab__content');
let current = 0;
let last;
for(let i = 0; i < tab.length; i++) {
	tab[i].addEventListener('click', function(event) {
    last = current;
		current = i;
 	    if (event.target) {
		       slide(current);
       }
	})
}


function slide() {
    tab[last].classList.remove('tab_active');
    content[last].classList.remove('tab__content_active');
    tab[current].classList.add('tab_active');
    content[current].classList.add('tab__content_active');
  }