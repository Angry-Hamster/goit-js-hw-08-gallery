import css from "./css/style.css";

import gallery from './js/galleryItem.js'
import template from './template/template.hbs'

function insertElements(data, template, place) {
  const element = template(data)
  place.insertAdjacentHTML('beforeend', element)
}

function replaceIMG(srcIm){
  let perentIm = document.querySelector('.lightbox__content')
  perentIm.innerHTML = ''
  perentIm.insertAdjacentHTML('beforeend', `<img class="lightbox__image" src="${srcIm}" alt="" />`)
}

let jsGallery = document.querySelector('.js-gallery')
insertElements(gallery, template, jsGallery)

let galleryItem = document.querySelectorAll('.gallery__image')
let jsLightbox = document.querySelector('.js-lightbox')
galleryItem.forEach((item, i)=>{
  item.addEventListener('click', () => {
    jsLightbox.classList.add('is-open')
    replaceIMG(gallery[i].original)
  })
})

document.addEventListener('keydown', function(event) {
  const key = event.key; // const {key} = event; in ES6+
  if (key === "Escape") {
    jsLightbox.classList.remove('is-open')
  }
});
console.log('click to Escape');