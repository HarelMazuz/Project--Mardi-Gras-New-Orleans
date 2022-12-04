let imgs = [
    '../imgs/Mardi-Gras-Dragon.jpg',
    '../imgs/index About.jpeg',
    '../imgs/Mardi-Gras-king.jpg',
    '../imgs/Mardi-Gras-Media.jpg',
    '../imgs/Mardi-Gras-Soliders.jpg',
    '../imgs/Mardi-Gras-Train.jpg',
    '../imgs/Mardi-Gras-women mask.jpg',
    '../imgs/media1.jpg',
    '../imgs/media4.jpg',
    '../imgs/media5.jpg'
]

for (let img of imgs) {
    document.querySelector('.photos-library').innerHTML += `<img src="${img}" class="photo" onclick="showImg('${img}')">`;
}
document.querySelector('.main-img').src = imgs[0];

function showImg(photo) {
    document.querySelector('.main-img').src = photo;
}

let videos = ['https://www.youtube.com/embed/qb1NKTA_mS4', 'https://www.youtube.com/embed/8g2xEdezIik', 'https://www.youtube.com/embed/3tVTZSFqUpw', 'https://www.youtube.com/embed/EkIZwXbSh-Y', 'https://www.youtube.com/embed/Sw_OgnXm2pE', 'https://www.youtube.com/embed/7J3ZKkmQxEE'];

for (let video of videos) {
    document.querySelector('.video-card').innerHTML += `<iframe height="315" class="col mb-3 col-md-6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen src="${video}"></iframe>`
}