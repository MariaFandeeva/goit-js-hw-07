import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");
const markupEl = createItemsMarkup(galleryItems);

galleryEl.insertAdjacentHTML("afterbegin", markupEl);

function createItemsMarkup(item) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}
const onItemClick = (event) => {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }
  openModal(event);
};
galleryEl.addEventListener("click", onItemClick);

function openModal(event) {
  const targetImg = event.target.getAttribute("data-source");
  const instance = basicLightbox.create(
    `<img src="${targetImg}" width="800" height="600">`
  );

  instance.show();
  closeModal(instance);
}

function closeModal(instance) {
  galleryEl.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      instance.close();
    }
  });
}
