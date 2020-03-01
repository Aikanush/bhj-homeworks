window.onload = () => {

	const rotator = document.getElementsByClassName('rotator__case');
	let color;
	let last;
	let current = 0;


	function active() {
			last = current;
			current += 1;

			for (let i = 0; i < rotator.length; i++) {
		        rotator[i].classList.remove('rotator__case_active');

		        if (current == rotator.length) {
		        	current = 0;
		         }

		    }
		    rotator[current].classList.add('rotator__case_active');


	}

	setInterval(active, 1000);
}