const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const imgSrc = `img/${chosenImage}`;

//document.body.style.backgroundImage = `url(img/${chosenImage})`;