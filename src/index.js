const image = require('./images/person.jpg').default;
const imgTag = document.createElement('img');

window.onload = function () {
  imgTag.src = image;
  imgTag.alt = 'a person stading between tall grass';
  imgTag.style = 'margin: auto; width: 40%; display: block;';

  document.body.appendChild(imgTag);
};
