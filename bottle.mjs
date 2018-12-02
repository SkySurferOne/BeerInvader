import { getRndInteger } from "./utils.mjs";

export function Bottle(convas, ctx, bottleImg) {
    let x = getRndInteger(0, convas.width);
    let y = 0;
    let w = 15;
    let h = 30;
    let step = 2;
    let destroy = false; 
    let points = 1;

    this.getPoints = function() {
        return points;
    };
    this.getX = function() {
        return x;
    };
    this.getY = function() {
        return y;
    };
    this.getWidth = function() {
        return w;
    };
    this.getHeight = function() {
        return h;
    };
    this.increaseSpeed = function() {
        step++;
    };
    this.canDestroy = function() {
        return destroy;
    };
    this.destroyObject = function() {
        destroy = true;
    };
    this.update = function() {
        if (y + h + step < convas.height) {
            y += step;
        } else {
            destroy = true;
        }
    };
    this.draw = function() {
        ctx.drawImage(bottleImg, x, y, w, h);
    };
}