document.addEventListener('DOMContentLoaded', function() {

	// Open menu & move page down in portrait mode
	document.querySelector('#menuselect').addEventListener('click', () => {
		document.querySelectorAll('.circle').forEach(e => e.classList.toggle('spin'));
		document.querySelector('.movedown').classList.toggle('movegal');
		document.querySelector('nav').classList.toggle('inframe');
		document.querySelector('nav').classList.toggle('outframe');
	});

	const	gallImage = document.querySelectorAll('#gallery img'),
			q = gallImage.length - 1,
			pics = document.querySelectorAll('.pics'),
			gallery = document.querySelector('#gallery'),
			picBack = document.querySelector('#picback'),
			goLeft = document.querySelector('#goleft'),
			goRight = document.querySelector('#goright'),
			bigPic = document.querySelector('#bigpic');

	let	x = 0;

	// Randomly select header image (various fruits)
	document.querySelector('#logo').src = '/imgs/fruit' + [~~(Math.random()*4)] + '.png';

	// Change image src and open gallery viewer by clicking an image
	for (let i = 0; i <= q; i++) {
		gallImage[i].addEventListener('click', () => {
			bigPic.src = 'gallery/image'+i+'.jpg';
			pics.forEach(e => e.classList.toggle('showhide'));
			x = i;
		});
	}

	function slideshow() {
		if	(x < q) {
			x++;
			bigPic.classList.toggle('showhide');
			setTimeout( () => { bigPic.setAttribute('src','gallery/image'+x+'.jpg'); }, 400);
			setTimeout( () => { bigPic.classList.toggle('showhide'); }, 500);
		}
		else if	(x >= q) {
			x = 0;
			bigPic.classList.toggle('showhide');
			setTimeout( () => { bigPic.setAttribute('src','gallery/image'+x+'.jpg'); }, 400);
			setTimeout( () => { bigPic.classList.toggle('showhide'); }, 500);
		}
	}

	function backshow() {
		if	(x > 0) {
			x--;
			bigPic.classList.toggle('showhide');
			setTimeout( () => { bigPic.setAttribute('src','gallery/image'+x+'.jpg'); }, 400);
			setTimeout( () => { bigPic.classList.toggle('showhide'); }, 500);
		}
		else if	(x === 0) {
			x = q;
			bigPic.classList.toggle('showhide');
			setTimeout( () => { bigPic.setAttribute('src','gallery/image'+x+'.jpg'); }, 400);
			setTimeout( () => { bigPic.classList.toggle('showhide'); }, 500);
		}
	}

	bigPic.addEventListener('click', () => {
		slideshow();
	});

	goRight.addEventListener('click', () => {
		slideshow();
	});

	goLeft.addEventListener('click', () => {
		backshow();
	});

	picBack.addEventListener('click', () => {
		pics.forEach(e => e.classList.toggle('showhide'));
	});

	// in case 'showhide' toggles get mixed from clicking too fast, this should reset
	gallery.addEventListener('click', () => {
		if (window.getComputedStyle(bigPic).display !== "none" && window.getComputedStyle(picBack).display === "none") {
			pics.forEach(e => e.classList.toggle('showhide'));
		}
	});

	document.addEventListener("keyup", e => {
		if (window.getComputedStyle(bigPic).display !== "none" && e.keyCode === 39) {
			slideshow();
		}
		else if (window.getComputedStyle(bigPic).display !== "none" && e.keyCode === 37) {
			backshow();
		}
		else if (e.keyCode === 27) {
			pics.forEach(e => e.classList.add('showhide'));
		}
	});

});