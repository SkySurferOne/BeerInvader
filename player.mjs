import {Bullet} from "./bullet.mjs";
import {checkCollision} from "./utils.mjs";

export class Player {
 
    constructor(canvas, ctx, playerImg, bulletImg) {
        this._w = 30;
        this._h = 70;
        this._x = (canvas.width / 2) - (this._w / 2);
        this._y = canvas.height - this._h;
        this._canvas = canvas;
        this._ctx = ctx;
        this._bulletImg = bulletImg;
        this._playerImg = playerImg;
        this._step = 4;
        this._destroy = false;
        this._lifes = 3;
        
    }
    get lifes() {
        return this._lifes;
    }
    decreaseLifes() {
        if (this._lifes > 0) {
            this._lifes--;
        }

        return this._lifes > 0;
    }
    collide(collidable) {
        return checkCollision(collidable, this);
    }
    get x() {
        return this._x;
    };
    get y() {
        return this._y;
    };
    get width() {
        return this._w;
    };
    get height() {
        return this._h;
    }
    shot() {
        return new Bullet(this._x + this._w / 2, this._y, this._canvas, this._ctx, this._bulletImg);
    }
    moveRight() {
        if (this._x + this._step + this._w < this._canvas.width) {
            this._x += this._step;
        }
    };
    moveLeft() {
        if (this._x - this._step > 0) {
            this._x -= this._step;
        }
    }
    canDestroy() {
        return this._destroy;
    }
    update() {
    }
    draw() {
        this._ctx.drawImage(this._playerImg, this._x, this._y, this._w, this._h);
    }
} 