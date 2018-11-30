export function Bullet(x, y, canvas, ctx) {
    let w = 10;
    let h = 10;
    let shotY = y;
    let shotX = x - w / 2;
    let step = 3;
    let destroy = false;
    
    this.getX = function() {
        return shotX;
    }
    this.getY = function() {
        return shotY;
    }
    this.getWidth = function() {
        return w;
    }
    this.getHeight = function() {
        return h;
    }
    this.update = function () {
        if (shotY - step > 0) {
            shotY -= step;
        } else {
            destroy = true;
        }
    }
    this.canDestroy = function () {
        return destroy;
    }
    this.draw = function() {
        ctx.fillStyle = "red";
        ctx.fillRect(shotX, shotY, w, h);
    }
}