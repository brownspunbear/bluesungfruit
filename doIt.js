document.addEventListener('DOMContentLoaded', function() {

	// Open menu & move page down in portrait mode
	document.querySelector('#menuSelect').addEventListener('click', () => {
		document.querySelectorAll('.circle').forEach(e => e.classList.toggle('spin'));
		document.querySelector('.moveDown').classList.toggle('moveGal');
		document.querySelector('nav').classList.toggle('inFrame');
		document.querySelector('nav').classList.toggle('outFrame');
	});

	const
		gallImage = document.querySelectorAll('#gallery img'),
		q = gallImage.length - 1,
		pics = document.querySelectorAll('.pics'),
		gallery = document.querySelector('#gallery'),
		picBack = document.querySelector('#picBack'),
		goLeft = document.querySelector('#goLeft'),
		goRight = document.querySelector('#goRight'),
		bigPic = document.querySelector('#bigPic');

	let	x = 0;

	// Randomly select header image (various fruits)
	document.querySelector('#logo').src = '/imgs/fruit' + [~~(Math.random()*4)] + '.png';

	// Change image src and open gallery viewer by clicking an image
	for (let i = 0; i <= q; i++) {
		gallImage[i].addEventListener('click', () => {
			bigPic.src = 'gallery/image'+i+'.jpg';
			pics.forEach(e => e.classList.toggle('showHide'));
			x = i;
		});
	}

	function slideShow() {
		if	(x < q) {
			x++;
			bigPic.classList.toggle('showHide');
			setTimeout( () => { bigPic.setAttribute('src','gallery/image'+x+'.jpg'); }, 400);
			setTimeout( () => { bigPic.classList.toggle('showHide'); }, 500);
		}
		else if	(x >= q) {
			x = 0;
			bigPic.classList.toggle('showHide');
			setTimeout( () => { bigPic.setAttribute('src','gallery/image'+x+'.jpg'); }, 400);
			setTimeout( () => { bigPic.classList.toggle('showHide'); }, 500);
		}
	}

	function backShow() {
		if	(x > 0) {
			x--;
			bigPic.classList.toggle('showHide');
			setTimeout( () => { bigPic.setAttribute('src','gallery/image'+x+'.jpg'); }, 400);
			setTimeout( () => { bigPic.classList.toggle('showHide'); }, 500);
		}
		else if	(x === 0) {
			x = q;
			bigPic.classList.toggle('showHide');
			setTimeout( () => { bigPic.setAttribute('src','gallery/image'+x+'.jpg'); }, 400);
			setTimeout( () => { bigPic.classList.toggle('showHide'); }, 500);
		}
	}

	function openClose() {
		pics.forEach(e => e.classList.toggle('showHide'));
	}

	bigPic.addEventListener('click', () => {
		slideShow();
	});

	goRight.addEventListener('click', () => {
		slideShow();
	});

	goLeft.addEventListener('click', () => {
		backShow();
	});

	picBack.addEventListener('click', () => {
		pics.forEach(e => e.classList.toggle('showHide'));
	});

	// in case 'showHide' toggles get mixed from clicking too fast, this should reset
	gallery.addEventListener('click', () => {
		if (window.getComputedStyle(bigPic).display !== "none" && window.getComputedStyle(picBack).display === "none") {
			openClose();
		}
	});

	document.addEventListener("keyup", event => {
		if (window.getComputedStyle(bigPic).display !== "none") {
			switch (event.key) {
				case "Left": case "ArrowLeft":
					backShow();
					break;
				case "Right": case "ArrowRight":
					slideShow();
					break;
				case "Esc": case "Escape":
					openClose();
					break;
				default:
					return;
			}
			event.preventDefault();
		}
	}, true);

});