let xVelocity = 1;
let yVelocity = 0;

document.onkeydown = keyPush;

function playGame() {
    let canvas = document.getElementById("snakes-canvas");
    let ctx = canvas.getContext("2d");
    let itemWidth = canvas.height / 25;

    let snake = [];
    for (i = (itemWidth*10); i <= (200 + (itemWidth * 5)); i += itemWidth) {
        snake.push(new SnakeObject(250, i));
    }

    window.setInterval(pGame, 200);

    function SnakeObject(x, y) {
        this.xPos = x;
        this.yPos = y;
    }

    function pGame() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#000000";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#1FFF1F";
        for (i = 0; i < snake.length; i++) {
            ctx.fillRect(snake[i].xPos, snake[i].yPos, itemWidth, itemWidth);
        }

        let newX = snake[0].xPos + (xVelocity * itemWidth);
        let newY = snake[0].yPos + (yVelocity * itemWidth);
        if (newX >= canvas.width) newX -= canvas.width;
        if (newY >= canvas.height) newY -= canvas.height;

        snake.unshift(new SnakeObject(newX, newY));
        snake.splice(-1, 1);
    }
}

function keyPush(key) {
    switch (key.keyCode) {
        case 37: // Left arrow
            xVelocity = -1;
            yVelocity = 0;
            break;
        case 38: // Up arrow
            xVelocity = 0;
            yVelocity = -1;
            break;
        case 39: // Right arrow
            xVelocity = 1;
            yVelocity = 0;
            break;
        case 40: // Down arrow
            xVelocity = 0;
            yVelocity = 1;
            break;
        default:
            break;
    }
    key.preventDefault();
}