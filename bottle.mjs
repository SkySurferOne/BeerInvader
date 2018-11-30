import { getRndInteger } from "./utils.mjs";

export function Bottle(convas, ctx) {
    let x = getRndInteger(0, convas.width);
    let y = 0;
    let w = 10;
    let h = 20;
    let step = 2;
    let destroy = false; 

    this.getX = function() {
        return x;
    }
    this.getY = function() {
        return y;
    }
    this.getWidth = function() {
        return w;
    }
    this.getHeight = function() {
        return h;
    }
    this.increaseSpeed = function() {
        step++;
    }
    this.canDestroy = function() {
        return destroy;
    }
    this.update = function() {
        if (y + 1 < convas.height + h) {
            y += 1;
        } else {
            destroy = true;
        }
    }
    this.draw = function() {
        ctx.fillStyle = "yellow";
        ctx.fillRect(x, y, w, h);
    }
}