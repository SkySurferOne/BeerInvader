export function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

export function checkCollision(c1, c2) {
    let points = [
        [c1.x, c1.y+c1.height], 
        [c1.x+c1.width/2, c1.y+c1.height],
        [c1.x+c1.width, c1.y+c1.height]
    ];

    for(let i=0; i<points.length; i++) {
        let [x, y] = points[i];
        if ((x >= c2.x && x <= c2.x + c2.width) &&
            (y >= c2.y && y <= c2.y + c2.height)) {
            return true;
        }
    }
    return false;
}