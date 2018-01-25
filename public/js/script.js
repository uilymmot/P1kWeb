function flipCoin() {
    var rand = Math.random();
    if (rand > 0.5) {
        alert("Heads");
        drawOnCan("Heads")
    }
    else {
        alert('Tails');
        drawOnCan('Tails');
    }
}

function home() {
    location.href = '/';
}

function getRandomVal() {
    let minVal = (document.getElementsByName('textbox1')[0].value);
    let maxVal = (document.getElementsByName('textbox2')[0].value);
    let ranVal = Math.random();
    let ranOut = Math.round((ranVal * ((maxVal - minVal)))) + +minVal;
    drawOnCan(ranOut);
    alert(ranOut);
}

function drawOnCan(num) {
    let thing = document.getElementById("valCan");
    let ctx = thing.getContext("2d");
    let yPos = Math.round(Math.random() * document.getElementById("valCan").clientHeight);
    let xPos = Math.round(Math.random() * document.getElementById("valCan").clientWidth);
    ctx.font = "18px Arial";
    ctx.fillStyle = "#000000";
    ctx.fillText(num, +xPos, +yPos);
}

$(function(){
    $('#txt').keypress(function(e){
        if( e.which == 49
            || e.which == 57
            || e.which == 56
            || e.which == 55
            || e.which == 54
            || e.which == 50
            || e.which == 51
            || e.which == 52
            || e.which == 53)  {
            return true ;
        }
        else {
            return false;
        }
    });
});