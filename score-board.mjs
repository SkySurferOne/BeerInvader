export function ScoreBoard() {
    let score = 0;

    this.addPoint = function() {
        score++;
    }
    this.getScore = function() {
        return score;
    }
}