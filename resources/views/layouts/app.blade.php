<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link type="text/css" rel="stylesheet"
          href="{{ asset('css/startPage.css') }}">
    <script type="text/javascript" src="{{ asset('js/script.js') }}"></script>

    <title>Uilymmot</title>

</head>
<body>
<div class="wrapper">
    <div class="header">

        <div class="title">
            <a href="/"><h1>Uilymmot</h1></a>
        </div>

        <div class="links">
            <div class="links-c">
                <a href="about" >About</a>
            </div>
            <div class="links-c">
                <a href="projects">Projects</a>
            </div>
            <div class="links-c">
                <a target="_blank" href="https://github.com/uilymmot">GitHub</a>
            </div>
            <div class="links-c">
                <a href="page1">Random Rest of website</a>
            </div>
        </div>

    </div>

    <div class="content">
        @yield('content')
    </div>


    @yield('bod')

    <div class="footer">
        <p>Unlicensed 2018, Tommy Liu <br/>
        All rights unreserved except where stuff lies under some license somewhere</p>
    </div>
</div>
</body>
</html>
