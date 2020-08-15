"use strict";

// import gallery from "./gallery-items.js";

const gallery = [
  {
    preview: "https://meest-tour.com.ua/typo3temp/pics/054835389f.jpg",
    original: "https://meest-tour.com.ua/typo3temp/pics/054835389f.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview: "https://meest-tour.com.ua/typo3temp/pics/054835389f.jpg",
    original: "https://meest-tour.com.ua/typo3temp/pics/054835389f.jpg",
    description: "Montenegro",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];

console.log(gallery);
const list = document.querySelector(".js-gallery");
const div1 = document.querySelector(".js-lightbox");
const div2 = document.querySelector(".lightbox__overlay");
const div3 = document.querySelector(".lightbox__content");
const image = document.querySelector(".lightbox__image");
const button = document.querySelector(".lightbox__button");

const generateGallery = function (array, place) {
  return array.map((elem) => {
    let keys = Object.keys(elem);
    const item = document.createElement("li");
    const link = document.createElement("a");
    link.classList.add("gallery__link");
    link.setAttribute("href", "");
    const img = document.createElement("img");
    img.classList.add("gallery__image");
    img.setAttribute("src", elem[keys[0]]);
    img.setAttribute("data-source", elem[keys[1]]);
    img.setAttribute("alt", elem[keys[2]]);

    link.appendChild(img);
    item.appendChild(link);
    place.appendChild(item);
  });
};
generateGallery(gallery, list);

// МОДАЛЬНОЕ ОКНО

list.addEventListener("click", (event) => {
  toOpenModal(event);
});

function toOpenModal(event) {
  if (event.target.nodeName === "IMG") {
    div1.classList.add("is-open");
    let path = event.target.getAttribute("data-source");
    image.src = path;
  }
  return;
}

function toCloseModal() {
  div1.classList.remove("is-open");
  image.src = "";
}
button.addEventListener("click", toCloseModal);
