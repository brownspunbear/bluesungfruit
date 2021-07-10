const
	logo = document.querySelector('#logo'),
	menuSelect = document.querySelector('#menuSelect'),
	menuLinks = document.querySelectorAll('nav a'),
	gallImage = document.querySelectorAll('#gallery img'),
	q = gallImage.length - 1,
	viewer = document.querySelector('#viewer'),
	picBack = document.querySelector('#picBack'),
	prevImg = document.querySelector('#prev'),
	nextImg = document.querySelector('#next'),
	bigPic = document.querySelector('#bigPic'),
	url = window.location.toString().includes('github') ? '/bluesungfruit' : '';

let x = 0,
	images = [];

logo.src = url + '/imgs/fruit' + [~~(Math.random() * 4)] + '.png';

menuSelect.addEventListener('click', () => {
	document.querySelectorAll('.circle').forEach(e => e.classList.toggle('spin'));
	document.querySelector('.moveDown').classList.toggle('moveGal');
	document.querySelector('nav').classList.toggle('inFrame');
	document.querySelector('nav').classList.toggle('outFrame');
});

menuLinks.forEach(item => {
	item.setAttribute('tabindex', 1);
});

gallImage.forEach((item, index) => {
	images.push(item.src);
	item.setAttribute('tabindex', 2);
	item.addEventListener('click', () => {
		openImage(index);
	});
	item.addEventListener('keyup', event => {
		viewer.classList.contains('showHide') && event.key === 'Enter' ? openImage(index) : null;
	});
});

bigPic.addEventListener('keyup', event => {
	event.key === 'Enter' ? nextImage() : null;
});

bigPic.addEventListener('click', () => {
	nextImage();
});

nextImg.addEventListener('click', () => {
	nextImage();
});

prevImg.addEventListener('click', () => {
	prevImage();
});

picBack.addEventListener('click', () => {
	openClose();
});

function openClose() {
	viewer.classList.toggle('showHide');
	setTimeout(() => { bigPic.focus(); }, 100);
}

function openImage(i) {
	bigPic.src = images[i];
	openClose();
	x = i;
}

function prevNext(j) {
	bigPic.classList.toggle('showHide');
	setTimeout(() => { bigPic.src = images[j]; }, 200);
	setTimeout(() => { bigPic.classList.toggle('showHide'); }, 300);
}

function nextImage() {
	x < q ? x++ : x = 0;
	prevNext(x);
}

function prevImage() {
	x > 0 ? x-- : x = q;
	prevNext(x);
}

document.addEventListener('keyup', event => {
	event.preventDefault();
	if (!viewer.classList.contains('showHide')) {
		switch (event.key) {
			case 'Left': case 'ArrowLeft':
				prevImage();
				break;
			case 'Right': case 'ArrowRight':
				nextImage();
				break;
			case 'Esc': case 'Escape':
				openClose();
				break;
			default:
				return;
		}
	}
}, true);