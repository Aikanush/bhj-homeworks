
const body = document.body;
const items = document.querySelectorAll('.slider__item');
const dot = document.querySelectorAll('.slider__dot');
let currentSlide = 0;
let lastSlide;

body.addEventListener('click', event => {
  const target = event.target;

  if(target.classList.contains('slider__arrow_prev')) {
    lastSlide = currentSlide;
    currentSlide -= 1;
    if(currentSlide < 0 && currentSlide != 0) {
      currentSlide = items.length - 1;
    }
    slide(currentSlide);
  
  }

  if (target.classList.contains('slider__arrow_next')) {
    lastSlide = currentSlide;
     currentSlide += 1;
  	if(currentSlide >= items.length){
  		currentSlide = 0;
  	}
    slide(currentSlide);
   
  }

})

for(let i = 0; i < dot.length; i++) {
	dot[i].addEventListener('click', function() {
    lastSlide = currentSlide;
		currentSlide = i;
 	    if (event.target) {
		       slide(currentSlide);
       }
	})
}


function slide() {
    items[lastSlide].classList.remove('slider__item_active');
    dot[lastSlide].classList.remove('slider__dot_active');
    items[currentSlide].classList.add('slider__item_active');
    dot[currentSlide].classList.add('slider__dot_active');
  }

