let xPositional = 100;
let pUp = false;
document.onkeydown = keyPushB;

function playBricks() {
    function BrickTile(x, y) {
        this.xPos = x;
        this.yPos = y;
    }

    function BallObject() {
        this.xPos = 250;
        this.yPos = 450;
        this.xVelocity = -5;
        this.yVelocity = -5;
        this.radiuss = 3;
    }

    function PaddlePbject() {
        this.xPos = xPositional;
        this.paddleWidth = Math.floor(canvas.width/10);
    }

    let canvas = document.getElementById('brick-canvas');
    let ctx = canvas.getContext('2d');
    let brickWidth = Math.floor(canvas.width / 8);
    let brickHeight = Math.floor(canvas.height / 16);

    ctx.fillStyle = "#000000";
    let bricksArr = [];
    newBricks();
    let paddle = new PaddlePbject();
    let ball = new BallObject();

    setInterval(pGame, 50);

    function pGame() {
        ctx.clearRect(0,0,canvas.height, canvas.width);

        for (let i = 0; i < bricksArr.length; i++) {
            ctx.fillStyle = "#000000";
            ctx.fillRect(bricksArr[i].xPos, bricksArr[i].yPos, brickWidth, brickHeight);
            ctx.strokeStyle = "#00FF00";
            ctx.rect(bricksArr[i].xPos, bricksArr[i].yPos, brickWidth, brickHeight);
            ctx.stroke();
        }

        ctx.fillStyle = "#FF0000";
        ctx.strokeStyle = "#000000";
        ctx.beginPath();
        ctx.arc(ball.xPos, ball.yPos, ball.radiuss, Math.PI * 2, false);
        ctx.fill();
        ctx.stroke();

        collisionCheck();
        ball.xPos += ball.xVelocity;
        ball.yPos += ball.yVelocity;

        ctx.fillStyle = "#FF00FF";
        ctx.fillRect(xPositional, canvas.height - 8, canvas.height / 10, 2);
        
        function collisionCheck() {
            for (let i = 0; i < bricksArr.length; i++) {
                if (ball.yPos < bricksArr[i].yPos + brickHeight
                 && ball.yPos > bricksArr[i].yPos) {
                    bricksArr.splice(-(bricksArr.length - i), 1);
                    ball.yVelocity *= -1;
                }
                if (ball.xPos < bricksArr[i].xPos + brickWidth
                    && ball.xPos > bricksArr[i].xPos) {
                    ball.xVelocity *= -1;
                }
            }

            if (ball.yPos > canvas.height - 8
             && ball.xPos < xPositional + paddle.paddleWidth
                && ball.xPos > xPositional) {
                ball.yVelocity *= -1;
            }

            if (ball.xPos > canvas.width ||
                    ball.xPos < 0) {
                ball.xVelocity *= -1;
            }
        }
    }

    function newBricks() {
        bricksArr = [];
        for (let i = 0; i < 14; i++) {
            for (let j = 0; j < 8; j++) {
                bricksArr.push(new BrickTile((j * brickWidth)+1, (i * brickHeight)+1));
            }
        }
    }
}

function keyPushB(key) {
    switch (key.keyCode) {
        case 37: // Left arrow
            xPositional -= 5;
            break;
        case 38: // Up arrow
            pUp = true;
            break;
        case 39: // Right arrow
            xPositional += 5;
            break;
        case 40: //Down arrow
            break;
        case 116:
            location.reload();
            break;
        default:
            break;
    }
    key.preventDefault();
}