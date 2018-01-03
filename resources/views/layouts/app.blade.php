<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link type="text/css" rel="stylesheet"
          href="{{ asset('css/startPage.css') }}">
    <title>Uilymmot</title>

</head>
<body>
<div class="wrapper">
    <div class="header">

        <div class="title">
            <a href="/"><h1>Uilymmot</h1></a>
        </div>

        <div class="links">
            <a href="about" >About</a> |
            <a href="posts">Projects</a> |
            <a target="_blank" href="https://github.com/uilymmot">GitHub</a> |
            <a href="page1">Random Rest of website</a>
        </div>

    </div>

    <div class="content">
        @yield('content')
    </div>
</div>

</body>
</html>
