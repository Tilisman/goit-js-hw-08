import imagesSrc from "./gallery-items.js"

const refs = {
	bodyRef: document.querySelector('body'),
	galleryRef: document.querySelector('.gallery'),	
}
console.log(refs.galleryRef);
function createGalleryEl (){
	const imageCollection = [];
	for (let i = 0; i < imagesSrc.length; i++) {
		const gallItemRef = document.createElement('li');
		gallItemRef.classList.add('gallery__item');

		const imgRef = document.createElement('img');
		imgRef.classList.add('gallery__image');
		imgRef.src = imagesSrc[i].preview;
		imgRef.alt = imagesSrc[i].description;
		imgRef.dataset.source = imagesSrc[i].original;
		
		gallItemRef.append(imgRef);	
    imageCollection.push(gallItemRef);
	}
	refs.galleryRef.append(...imageCollection);
}	

createGalleryEl();