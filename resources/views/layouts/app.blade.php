<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link type="text/css" rel="stylesheet"
          href="{{ asset('css/s.css') }}">
    <script type="text/javascript" src="{{ asset('js/script.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/snakes.js') }}"></script>

    <title>Tommy Liu</title>

</head>
<body>
<div class="wrapper">
    <div class="header">

        <div class="title">
            <a href="/"><h1>Tommy Liu</h1></a>
        </div>

        <div class="links">
            <div class="links-c">
                <a href="about" >About</a>
            </div>
            <div class="links-c">
                <a href="projects">Projects</a>
            </div>
            <div class="links-c">
                <a href="page1">Misc web stuff</a>
            </div>
            <div class="links-c">
                <a href="snakesPage">Snakes</a>
            </div>
            <div class="links-c">
                <a target="_blank" href="https://github.com/uilymmot">GitHub</a>
            </div>
        </div>

    </div>

    <div class="content">
        @yield('content')
    </div>

    @yield('bod')

    <div class="footer">
        <p>MIT License(c) 2018, Tommy Liu <br/>
            All rights unreserved really.</p>
    </div>
</div>
</body>
</html>
