const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;

let myCarousel = require('./carousel-images');
let carousel = myCarousel.carousel;
let myGallery = require('./gallery-images');
let gallery = myGallery.gallery;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get('/gallery', (req, res) => {
  res.send(gallery)
});

app.get('/carousel', (req, res) => {
    res.send(carousel)
})

//TODO: fix na requisicao header e do footer ao server e nas variaveis locais
app.listen(port);
