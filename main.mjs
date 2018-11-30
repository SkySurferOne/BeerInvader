import {Game} from './game.mjs';

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

new Game(canvas, ctx).run();