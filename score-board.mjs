export function ScoreBoard(canvas, ctx) {
    let score = 0;
    let lifes = 3;
    let destroy = false;

    this.updateLifes = function(newLifes) {
        lifes = newLifes;
    };
    this.addPoint = function() {
        score++;
    };
    this.addPointCustom = function(points) {
        score += points;
    };
    this.getScore = function() {
        return score;
    };
    this.canDestroy = function () {
        return destroy;
    };
    this.update = function () {
    };
    this.draw = function () {
        ctx.fillStyle = "white";
        ctx.font = "20px Arial";
        ctx.fillText(`Lifes: ${lifes}`,10,30);
        ctx.fillText(`Score: ${score}`,10,60);
    };
}