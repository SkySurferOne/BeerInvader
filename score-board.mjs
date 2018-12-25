export class ScoreBoard {

    constructor(canvas, ctx) {
        this._ctx = ctx;
        this._canvas = canvas;
        this._score = 0;
        this._lifes = 3;
        this._destroy = false;
    }

    updateLifes(newLifes) {
        this._lifes = newLifes;
    }
    addPoint() {
        this._score++;
    }
    addPointCustom(points) {
        this._score += points;
    }
    get score() {
        return this._score;
    }
    canDestroy() {
        return this._destroy;
    }
    update() {
    }
    draw() {
        this._ctx.fillStyle = "white";
        this._ctx.font = "20px Arial";
        this._ctx.fillText(`Lifes: ${this._lifes}`,10,30);
        this._ctx.fillText(`Score: ${this._score}`,10,60);
    }
}