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
        function flip() {
            var rand = Math.random();

            if (rand > 0.5) alert("Heads");
            else alert('Tails');
        }
    </script>

    <title> Page 1</title>
    <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
</head>
<body>
<div class="flex-center position-ref full-height">
    <div class="h1"><?php
        echo 'page opened on: ' . date('m/d/Y h:i:s a', time());
        ?></div>

    <button type="button" onclick="flip()" autofocus="autofocus">Flip</button>

</div>
</body>
</html>