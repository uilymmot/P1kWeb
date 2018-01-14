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
        this.yPos = 250;
        this.xVelocity = -(Math.random()*5);
        this.yVelocity = -(Math.random()*5);
        this.radiuss = 3;
    }

    function PaddlePbject() {
        this.xPos = xPositional;
    }

    let canvas = document.getElementById('brick-canvas');
    let ctx = canvas.getContext('2d');
    let brickX = Math.floor(canvas.width / 8);
    let brickY = Math.floor(canvas.height / 16);

    ctx.fillStyle = "#000000";
    let bricksArr = [];
    newBricks();
    let paddle = new PaddlePbject();
    let ball = new BallObject();

    setInterval(pGame, 66.6);

    function pGame() {
        ctx.clearRect(0,0,canvas.height, canvas.width);

        for (let i = 0; i < bricksArr.length; i++) {
            ctx.fillStyle = "#000000";
            ctx.fillRect(bricksArr[i].xPos, bricksArr[i].yPos, brickX, brickY);
            ctx.strokeStyle = "#00FF00";
            ctx.rect(bricksArr[i].xPos, bricksArr[i].yPos, brickX, brickY);
            ctx.stroke();
        }

        ctx.fillStyle = "#FF0000";
        ctx.strokeStyle = "#000000";
        ctx.beginPath();
        ctx.arc(ball.xPos, ball.yPos, ball.radiuss, Math.PI * 2, false);
        ctx.fill();
        ctx.stroke();

        ball.xPos += ball.xVelocity;
        ball.yPos += ball.yVelocity;

        ctx.fillStyle = "#FF00FF";
        ctx.fillRect(xPositional, canvas.height - 8, canvas.height / 10, 2);
    }



    function newBricks() {
        bricksArr = [];
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 8; j++) {
                bricksArr.push(new BrickTile((j * brickX)+1, (i * brickY)+1));
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
        case 116:
            location.reload();
            break;
        default:
            break;
    }
    key.preventDefault();
}