<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link type="text/css" rel="stylesheet"
          href="{{asset('css/startPage.css')}}">
    <meta charset="UTF-8">
    <script type="text/javascript">
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
            var ranOut = Math.round(ranVal * (maxVal - minVal));
            alert(ranOut+1);
        }

    </script>

    <title> Page 1</title>
    <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
</head>
<body>
<div class="flex-center position-ref">
    <div class="content">
        <button type="button" onclick="home()">Home</button>

        <div class="h1"><?php
            echo 'page opened on: ' . date('m/d/Y h:i:s a', time());
            ?></div>

        <button type="button" onclick="flipCoin()" autofocus="autofocus">Flip</button>

        <br/><br/><br/>

        Get Random Number between: <input name="textbox1" id="textbox1" type="number"> and <input name="textbox2" id="textbox2" type="number">. <button type="button" onclick="getRandomVal()"> get number</button>

    </div>
</div>
</body>
</html>