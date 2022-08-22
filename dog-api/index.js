// find elements
const getDogImageButton = document.querySelector("button");
const imgDiv = document.querySelector(".img-div");

const getDogImage = () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((data) => {
      imgDiv.innerHTML = `<img src="${data.message}" alt="dog image"/>`;
    });
};

getDogImageButton?.addEventListener("click", getDogImage);
