window.onload = () => {

  const div = document.getElementsByClassName('reveal');
  function inViewPort(element){
    const viewportHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    return elementTop < viewportHeight;
  };

 window.addEventListener('scroll', ()=> {
  for (let i = 0; i < div.length; i++) {
 	if (inViewPort(div[i]) == true) {
  	   div[i].classList.add('reveal_active');
    } else {
    	div[i].classList.remove('reveal_active');
    }
   }
 })
}