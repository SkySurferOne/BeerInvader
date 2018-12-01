export function ScoreBoard() {
    let score = 0;

    this.addPoint = function() {
        score++;
    }
    this.addPointCustom = function(points) {
        score += points;
    }
    this.getScore = function() {
        return score;
    }
}