import { Bullet } from "./bullet.mjs";

export function Player(w, h, canvas, ctx) {
    let x = (canvas.width / 2) - (w / 2);
    let y = canvas.height - h;
    let step = 5;
    let destroy = false;
    let bullets = []; 
    let lifes = 3;       
  
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
    this.shot = function() {
        return new Bullet(x + w / 2, y, canvas, ctx);
    }
    this.moveRight = function() {
        if (x + step < canvas.width + w) {
            x+=step;
        }
    }
    this.moveLeft = function() {
        if (x - step > 0) {
            x-=step;
        }
    }
    this.canDestroy = function() {
        return destroy;
    }
    this.update = function() {
    }
    this.draw = function() {
        ctx.fillStyle = "white";
        ctx.fillRect(x, y, w, h);
    }
} 