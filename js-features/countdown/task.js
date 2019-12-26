const showTimer = function() {
	const timer = document.getElementById('timer');
	timer.textContent -= 1;
	if (timer.textContent == 0) {
		alert(`«Вы победили в конкурсе!»`);
	}
  
    
}

setInterval(showTimer, 1000);