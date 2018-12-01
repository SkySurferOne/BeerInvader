export function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

export function checkCollision(c1, c2) {
    let points = [
        [c1.getX(), c1.getY()+c1.getHeight()], 
        [c1.getX()+c1.getWidth()/2, c1.getY()+c1.getHeight()],
        [c1.getX()+c1.getWidth(), c1.getY()+c1.getHeight()]
    ];

    for(let i=0; i<points.length; i++) {
        let [x, y] = points[i];
        if ((x >= c2.getX() && x <= c2.getX() + c2.getWidth()) &&
            (y >= c2.getY() && y <= c2.getY() + c2.getHeight())) {
            return true;
        }
    }
    return false;
}