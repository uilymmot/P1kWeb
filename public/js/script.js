function flipCoin() {
    var rand = Math.random();
    if (rand > 0.5) alert("Heads");
    else alert('Tails');
}

function home() {
    location.href = '/';
}

function getRandomVal() {
    var minVal = (document.getElementsByName('textbox1')[0].value);
    var maxVal = (document.getElementsByName('textbox2')[0].value);
    var ranVal = Math.random();
    var ranOut = +Math.round((ranVal * ((maxVal - minVal)))) + +minVal;
    drawOnCan(ranOut);
    alert(ranOut)
}

function drawOnCan(num) {
    var thing = document.getElementById("valCan");
    var ctx = thing.getContext("2d");
    var yPos = Math.round(Math.random() * document.getElementById("valCan").clientHeight);
    var xPos = Math.round(Math.random() * document.getElementById("valCan").clientWidth);
    ctx.font = "30px Arial";
    ctx.fillStyle = "#11EE15";
    ctx.fillText(num, +xPos, +yPos);
}