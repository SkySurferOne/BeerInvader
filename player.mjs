import { Bullet } from "./bullet.mjs";
import { checkCollision } from "./utils.mjs";

export function Player(w, h, canvas, ctx) {
    let x = (canvas.width / 2) - (w / 2);
    let y = canvas.height - h;
    let step = 5;
    let destroy = false;
    let bullets = []; 
    let lifes = 3;       
  
    this.getLifes = function() {
        return lifes;
    }
    this.decreaseLifes = function() {
        if (lifes > 0) {
            lifes--;
        }

        if (lifes > 0) {
            return true;
        } else {
            return false;
        }
    }
    this.collide = function(collidable) {
        return checkCollision(collidable, this);
    }
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
        if (x + step + w < canvas.width) {
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