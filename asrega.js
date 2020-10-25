"use strict";

let viewportWidth = window.innerWidth || document.body.clientWidth;

function doGallerySize() {

	const galleryPages = document.querySelectorAll('.galleryPage');

	if (viewportWidth > 799) {

		const gallery = document.getElementById('gallery');
		const gallWidth = getComputedStyle(gallery).getPropertyValue('width').match(/\d+/);
		const findRatio = (a, b) => a / b;

		galleryPages.forEach((item, index) => {
			const images = document.querySelectorAll(`#galleryPage${index} img`);
			let sum = 0,
				spacing = 20,
				spaces = images.length - 1;

			images.forEach(thisImage => {
				sum += findRatio(thisImage.naturalWidth, thisImage.naturalHeight);
			});

			let finalHeight = (gallWidth - (spacing * spaces)) / sum;

			item.style.height = finalHeight + 'px';
			item.style.marginBottom = spacing + 'px';
		});
	}
}

window.addEventListener('load', doGallerySize);
window.addEventListener('resize', doGallerySize);