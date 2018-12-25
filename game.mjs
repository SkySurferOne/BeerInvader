import { Player } from "./player.mjs";
import { Bottle } from "./bottle.mjs";
import { Bullet } from "./bullet.mjs";
import { ScoreBoard } from "./score-board.mjs";
import { StrongBottle } from "./strongBottle.mjs";

export function Game(canvas, ctx, images) {
    let player;
    let drawables = [];
    let obstacleInterval = 2000;
    let obastacleNum = 1;
    let prevObstacleTimestamp = null;
    let prevDiffTimestamp = null;
    let increaseDifficultyInterval = 10 * 1000;
    let desreaseObstacleIntervalStep = 100;
    let keyMap = {};
    let shotInterval = 500;
    let prevShotTimestamp = null;
    let runGame = true;
    let scoreBoard = new ScoreBoard(canvas, ctx);

    let checkCollisions = function() {
        let bullets = drawables.filter(d => d instanceof Bullet);
        let bottles = drawables.filter(d => d instanceof Bottle);
        bottles.forEach(b => {
            if (!b.canDestroy() && player.collide(b)) {
                if(player.decreaseLifes()) {
                    console.log('Lifes ', player.lifes);
                    scoreBoard.updateLifes(player.lifes);
                    b.destroyObject();
                } else {
                    console.log('You are dead!');
                    runGame = false;
                }
            }

            bullets.forEach(bu => {
                if (bu.collide(b)) {
                    b.destroyObject();
                    scoreBoard.addPointCustom(b.points);
                    console.log('Score: ', scoreBoard.score);
                }
            });
        });
    };
    let cleanDrawables = function() {
        drawables = drawables.filter(d => !d.canDestroy());
    };
    let createObstacles = function() {
        for (let i = 0; i<obastacleNum; i++) {
            drawables.push(new Bottle(canvas, ctx, images['bottle'].img));
        }
        if (Math.random() >= 0.5) {
            drawables.push(new StrongBottle(canvas, ctx, images['strong_bottle'].img));
        }
    };
    let checkObstaclesInterval = function(timestamp) {
        if (!prevObstacleTimestamp) {
            prevObstacleTimestamp = timestamp;
        } else {
            let dt = timestamp - prevObstacleTimestamp;
            if (dt > obstacleInterval) {
                createObstacles();
                prevObstacleTimestamp = timestamp;
            }
        }
    };
    let checkDiffucultyInterval = function(timestamp) {
        if (!prevDiffTimestamp) {
            prevDiffTimestamp = timestamp;
        } else {
            let dt = timestamp - prevDiffTimestamp;
            if (dt > increaseDifficultyInterval) {
                if (obstacleInterval - desreaseObstacleIntervalStep >= 0) {
                    obstacleInterval -= desreaseObstacleIntervalStep;
                }
                prevDiffTimestamp = timestamp;
            }
        }
    };
    let loop = function(timestamp) {
        handleKeyActions(timestamp);
        checkDiffucultyInterval(timestamp);
        checkObstaclesInterval(timestamp);
        clearBg();
        drawables.forEach(d => d.update());
        drawables.forEach(d => d.draw());
        checkCollisions();
        cleanDrawables();
        if (runGame) {
            window.requestAnimationFrame(loop);
        } else {
            console.log('Game over');
        }
    };
    let clearBg = function() {
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    };
    let handleKeyActions = function(timestamp) {
        if (keyMap['37']) {
            // left arrow
            player.moveLeft();
        } else if (keyMap['39']) {
            // right arrow
            player.moveRight();
        } 
        
        if (keyMap['32']) {
            if (!prevShotTimestamp) {
                prevShotTimestamp = timestamp;
                drawables.push(player.shot());
            } else {
                let dt = timestamp - prevShotTimestamp;
                if (dt > shotInterval) {
                    drawables.push(player.shot());
                    prevShotTimestamp = timestamp;
                }
            }
        }
    };
    let checkKey = function(e) {
        e = e || window.event;
        keyMap[e.keyCode] = e.type === 'keydown';
    };
    let init = function () {
        canvas.width = window.innerWidth * 0.6;
        canvas.height = window.innerHeight;
        drawables = [];
        player = new Player(canvas, ctx, images['player'].img, images['bullet'].img);
        drawables.push(player);
        drawables.push(scoreBoard);
        document.onkeydown = document.onkeyup = checkKey;
    };
    this.run = function() {
        init();
        loop();    
    };
}