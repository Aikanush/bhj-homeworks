const showTimer = function() {
	const timer = document.getElementById('timer');
	timer.textContent -= 1;
	if (timer.textContent == 0) {
		clearInterval(timers);
		alert(`«Вы победили в конкурсе!»`);
	}
  
    
}

let timers = setInterval(showTimer, 1000);