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
    var ranOut = +Math.round((ranVal * ((maxVal+ +1 - minVal)))) + +minVal;
    alert(ranOut)
}
