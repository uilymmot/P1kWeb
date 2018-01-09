function playGame() {
    var paddle = new Object();
    var brickItem = new Object();
    var ball = new Object();
    var canvasX = document.getElementById('brickBreaker').clientWidth;
    var canvasY = document.getElementById('brickBreaker').clientHeight;
    var canvas = document.getElementById('brickBreaker');
    var ctx = canvas.getContext("2d");

    paddle.xPos = canvasX / 2;
    paddle.padWidth = 50;
    paddle.padHeight = 2;
    paddle.colour = "#000000";

    brickItem.brickWidth = +(canvasX / 8) - +1;
    brickItem.brickHeight = +(canvasY / 16) - +1;

    var initialBrickX = 1;
    var initialBrickY = 1;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (i = 0; i < 5; i++) {
        for (j = 0; j < 8; j++) {
            ctx.fillStyle = brickItem.colour;
            ctx.fillRect(initialBrickX, initialBrickY, brickItem.brickWidth,  brickItem.brickHeight);

            initialBrickX += brickItem.brickWidth + 1;

        }
        initialBrickX = 1;
        initialBrickY += brickItem.brickHeight + 1;
    }

}
