import { getRndInteger } from "./utils.mjs";

export class Bottle {
    
    constructor(canvas, ctx, bottleImg) {
        this._ctx = ctx;
        this._canvas = canvas;
        this._x = getRndInteger(0, canvas.width);
        this._y = 0;
        this._w = 15;
        this._h = 30;
        this._step = 2;
        this._destroy = false; 
        this._points = 1;
        this._bottleImg = bottleImg;
    }

    get points() {
        return this._points;
    }
    get x() {
        return this._x;
    }
    get y() {
        return this._y;
    }
    get width() {
        return this._w;
    }
    get height() {
        return this._h;
    }
    increaseSpeed() {
        this._step++;
    }
    canDestroy() {
        return this._destroy;
    }
    destroyObject() {
        this._destroy = true;
    }
    update() {
        if (this._y + this._h + this._step < this._canvas.height) {
            this._y += this._step;
        } else {
            this._destroy = true;
        }
    }
    draw() {
        this._ctx.drawImage(this._bottleImg, this._x, this._y, this._w, this._h);
    }
}