const clike = document.getElementById('clicker__counter');

const image = document.getElementById('cookie');

 image.onclick = () => {
 	clike.textContent ++;
 	if ((clike.textContent % 2) !== 0) {
       image.width = 300;
 	} else {
 	   image.width = 200;
 	}

  };






