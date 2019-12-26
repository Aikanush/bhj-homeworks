 const dead = document.getElementById('dead');
 const lost = document.getElementById('lost');


 for (let i = 1; i <= 9; i++) {
 	const hole = document.getElementById('hole' + i);
 	hole.onclick = () => {
 		if (hole.classList.contains( 'hole_has-mole')) {
 			dead.textContent ++;
 		} else {
 			lost.textContent ++;
 		}

 		if (dead.textContent >= 10) {
 			alert('Вы выиграли');
 			dead.textContent = 0;
 			lost.textContent = 0;

 		} else if (lost.textContent >= 4) {
 			alert('Вы проиграли');
 			dead.textContent = 0;
 			lost.textContent = 0;
 		}
 	}
 }