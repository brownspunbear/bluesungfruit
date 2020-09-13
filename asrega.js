"use strict";

let viewportWidth = window.innerWidth || document.body.clientWidth;

function doGallerySize() {

	if (viewportWidth > 799) {

		const	gallery = document.getElementById('gallery'),
				galleryPages = document.getElementsByClassName('galleryPage'),
				gallWidth = getComputedStyle(gallery).getPropertyValue('width').match(/\d+/),
				findRatio = (a, b) => a / b;

		for (let i = 0; i < galleryPages.length; i++) {

			const	images = document.querySelectorAll(`#galleryPage${i} img`),
					thisGalleryPage = document.querySelector(`#galleryPage${i}`);
			let sum = 0,
				spacing = 20,
				spaces = images.length - 1;

			images.forEach(thisImage => {
				sum += findRatio(thisImage.naturalWidth, thisImage.naturalHeight);
			});

			let finalHeight = (gallWidth - (spacing * spaces)) / sum;

			thisGalleryPage.style.height = finalHeight + "px";
			thisGalleryPage.style.marginBottom = spacing + "px";
		}
	}
}

window.addEventListener('load', doGallerySize);
window.addEventListener('resize', doGallerySize);