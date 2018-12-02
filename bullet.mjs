import {checkCollision} from "./utils.mjs";

export function Bullet(x, y, canvas, ctx, bulletImg) {
    let w = 15;
    let h = 17;
    let shotY = y;
    let shotX = x - w / 2;
    let step = 3;
    let destroy = false;

    this.collide = function (collidable) {
        return checkCollision(collidable, this);
    };
    this.getX = function () {
        return shotX;
    };
    this.getY = function () {
        return shotY;
    };
    this.getWidth = function () {
        return w;
    };
    this.getHeight = function () {
        return h;
    };
    this.update = function () {
        if (shotY - step > 0) {
            shotY -= step;
        } else {
            destroy = true;
        }
    };
    this.canDestroy = function () {
        return destroy;
    };
    this.destroyObject = function () {
        destroy = true;
    };
    this.draw = function () {
        ctx.drawImage(bulletImg, shotX, shotY, w, h);
    };
}