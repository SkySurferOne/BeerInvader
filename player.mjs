import {Bullet} from "./bullet.mjs";
import {checkCollision} from "./utils.mjs";

export function Player(canvas, ctx, playerImg, bulletImg) {
    let w = 30;
    let h = 70;
    let x = (canvas.width / 2) - (w / 2);
    let y = canvas.height - h;
    let step = 4;
    let destroy = false;
    let lifes = 3;

    this.getLifes = function () {
        return lifes;
    };
    this.decreaseLifes = function () {
        if (lifes > 0) {
            lifes--;
        }

        return lifes > 0;
    };
    this.collide = function (collidable) {
        return checkCollision(collidable, this);
    };
    this.getX = function () {
        return x;
    };
    this.getY = function () {
        return y;
    };
    this.getWidth = function () {
        return w;
    };
    this.getHeight = function () {
        return h;
    };
    this.shot = function () {
        return new Bullet(x + w / 2, y, canvas, ctx, bulletImg);
    };
    this.moveRight = function () {
        if (x + step + w < canvas.width) {
            x += step;
        }
    };
    this.moveLeft = function () {
        if (x - step > 0) {
            x -= step;
        }
    };
    this.canDestroy = function () {
        return destroy;
    };
    this.update = function () {
    };
    this.draw = function () {
        ctx.drawImage(playerImg, x, y, w, h);
    };
} 