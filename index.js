const imageSrc = [
    "img/companyImg/1.png",
    "img/companyImg/2.png",
    "img/companyImg/3.png",
    "img/companyImg/4.png",
    "img/companyImg/5.png",
];

const container = document.getElementById('imageContainer');
const imageElements = imageSrc.map((src) => {
    const img = document.createElement('img');
    img.src = src;
    return img;
});

imageElements.forEach((img) => {
    container.appendChild(img);
});