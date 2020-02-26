window.onload = () => {

  const body = document.body;

  const div = document.getElementsByClassName('reveal');
  function inViewPort(element){
    const viewportHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    return elementTop < viewportHeight;
  };

 body.addEventListener('scroll', ()=> {
  for (var i = 0; i < div.length; i++) {
 	if (inViewPort(div)) {
  	   div[i].classList.toggle('reveal_active');
    }
   }
 })
}