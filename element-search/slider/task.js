
const body = document.body;
const items = document.querySelectorAll('.slider__item');
const dot = document.querySelectorAll('.slider__dot')
let currentSlide = 0;

body.addEventListener('click', event => {
  const target = event.target;

  if(target.classList.contains('slider__arrow_prev')) {
    for(let value of items) {
      if(value.classList.contains('slider__item_active')) {
        value.classList.remove('slider__item_active');
      }
    }

    for(let value of dot) {
 	  if(value.classList.contains('slider__dot_active')){
 		value.classList.remove('slider__dot_active')
 	  }
 	}

    if(currentSlide < 0) {
      currentSlide = items.length - 1;
      items[currentSlide].classList.add('slider__item_active');
      dot[currentSlide].classList.add('slider__dot_active');
      currentSlide -= 1
      
    }
    items[currentSlide].classList.add('slider__item_active');
    dot[currentSlide].classList.add('slider__dot_active');
      currentSlide -= 1;

  }

  if (target.classList.contains('slider__arrow_next')) {
  	for(let value of items) {
  		if(value.classList.contains('slider__item_active')) {
  			value.classList.remove('slider__item_active');
  		}
  	}

  	 for(let value of dot) {
 	  if(value.classList.contains('slider__dot_active')){
 		value.classList.remove('slider__dot_active')
 	  }
 	}

  	if(currentSlide >= items.length) {
  		currentSlide = 0;
  		items[currentSlide].classList.add('slider__item_active');
  		dot[currentSlide].classList.add('slider__dot_active');
  		currentSlide += 1;
  	}
  	items[currentSlide].classList.add('slider__item_active');
  	dot[currentSlide].classList.add('slider__dot_active');
       currentSlide += 1;
  }

})

for(let i = 0; i < dot.length; i++) {
	dot[i].addEventListener('click', function() {
		currentSlide = i;
		
 	    if (event.target) {
 	    	for(let value of items) {
              if(value.classList.contains('slider__item_active')) {
              value.classList.remove('slider__item_active');
              }
           }

           for(let value of dot) {
 	          if(value.classList.contains('slider__dot_active')){
 		      value.classList.remove('slider__dot_active')
 	          }
 	       }
		   items[currentSlide].classList.add('slider__item_active');
           dot[currentSlide].classList.add('slider__dot_active');
       }
	})
}


