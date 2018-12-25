import {checkCollision} from "./utils.mjs";

export class Bullet {
    
    constructor(x, y, canvas, ctx, bulletImg) {
        this._x = x;
        this._y = y;
        this._canvas = canvas;
        this._ctx =ctx;
        this._bulletImg = bulletImg;
        this._w = 15;
        this._h = 17;
        this._shotY = this._y;
        this._shotX = this._x - this._w / 2;
        this._step = 3;
        this._destroy = false;
    }

    collide(collidable) {
        return checkCollision(collidable, this);
    }
    get x() {
        return this._shotX;
    }
    get y () {
        return this._shotY;
    }
    get width() {
        return this._w;
    }
    get height() {
        return this._h;
    }
    update() {
        if (this._shotY - this._step > 0) {
            this._shotY -= this._step;
        } else {
            this._destroy = true;
        }
    };
    canDestroy() {
        return this._destroy;
    }
    destroyObject() {
        this._destroy = true;
    }
    draw() {
        this._ctx.drawImage(this._bulletImg, this._shotX, this._shotY, this._w, this._h);
    }
}