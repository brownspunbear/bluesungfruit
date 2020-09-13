document.addEventListener('DOMContentLoaded', function() {

	let	gallImage = document.querySelectorAll('#gallery img'),
		imgLength = gallImage.length,
		imgCounter = 0;

	Array.prototype.forEach.call(gallImage, function(img) {
		if (img.complete) { incrementCounter(); }
		else { img.addEventListener('load', incrementCounter, false); }
	});

	function incrementCounter() {
		imgCounter++;
		if (imgCounter === imgLength) {
			document.querySelector("#gallery").classList.remove('waitgallery');
			document.querySelector("#gallery").classList.add('readygallery');
			document.querySelector("#loading").classList.add('waitgallery');
		}
	}

});