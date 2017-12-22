@extends('layouts.app')

@section('content')
    <div class="flex-center position-ref full-height" style="vertical-align: top; display: block;">

        <div class="content">
            <div class="title m-b-md">
                <a href="/">Uilymmot</a>
            </div>

            <div class="wrap1">
                <div class="links">
                    <a href="about" >About</a>
                </div>

                <div class="links">
                    <a href="posts">Projects</a>
                </div>

                <div class="links">
                    <a target="_blank" href="https://github.com/uilymmot">GitHub</a>
                </div>

                <div class="links">
                    <a href="page1">Random Rest of website</a>
                </div>
            </div>

            <div class="content" style="margin-top: -10%; width: auto">
                @if(count($posts)>0)
                    @foreach($posts as $post)
                        <div class="well">
                            <h3>{{$post->title}}</h3>
                            <p style="color: black; font-size: 13px; font-family: Verdana; opacity: 50;">
                               {{$post->description}}
                            </p>
                        </div>
                    @endforeach

                @else
                    <p>no posts found</p>
                @endif
            </div>
        </div>

    </div>
@endsection