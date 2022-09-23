import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryEl = document.querySelector(".gallery");
const markupEl = createItemsMarkup(galleryItems);

galleryEl.insertAdjacentHTML("afterbegin", markupEl);

function createItemsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join("");
}
const lightbox = new SimpleLightbox(".gallery a", {
  captionPosition: "bottom",
  captionDelay: 250,
  captionsData: "alt",
});
console.log(galleryItems);
