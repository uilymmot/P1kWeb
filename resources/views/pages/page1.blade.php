<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link type="text/css" rel="stylesheet"
          href="{{asset('css/startPage.css')}}">
    <meta charset="UTF-8">
    <title> Page 1</title>
    <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
</head>
<body>
    <div class="flex-center position-ref full-height">
        <div class="h1"><?php
            echo 'page opened on: ' . date('m/d/Y h:i:s a', time());
            ?></div>

        <?php
            if (!empty($_GET['act'])) {
                $val = mt_rand(0, 1);
                if ($val = 1) {
                    echo 'heads';
                }
                else {
                    echo 'tails';
                }
             }
             else {
                ?>
                <form action="index.php" method="get">
                    <input type="hidden" name="act" value="run">
                    <input type="submit" value="flip">
        <?php
             }
        ?>
    </div>
</body>
</html>