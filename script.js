const gallery = document.getElementById('gallery');
const images = [
    'images/img1.jpg',
    'images/img2.jpg',
    'images/img3.jpg',
    'images/img4.jpg',
    'images/img5.jpg',
    'images/img6.jpg',
    'images/img7.jpg',
    'images/img8.jpg',
];

images.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = 'Gallery Image';
    gallery.appendChild(img);
});
