import {Game} from './game.mjs';

let loadGame = function () {
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    let images = [
        {name: 'player', src: 'img/greg.gif', img: null},
        {name: 'bottle', src: 'img/bottle.png', img: null},
        {name: 'bullet', src: 'img/hand.png', img: null},
    ];
    let imgLoaded = 0;

    images.forEach(obj => {
        let img = new Image();
        img.src = obj.src;
        obj.img = img;
        img.addEventListener('load', function () {
            imgLoaded++;
            console.log(`Image ${img.src} is loaded`);
            if (imgLoaded === images.length) {
                runGame(canvas, ctx, toDict(images));
            }
        }, false);
    });
};

let toDict = function (arr) {
    let obj = {};
    arr.forEach(item => {
        obj[item.name] = {
            src: item.src,
            img: item.img
        };
    });
    return obj;
};

let runGame = function (canvas, ctx, images) {
    new Game(canvas, ctx, images).run();
};

loadGame();
