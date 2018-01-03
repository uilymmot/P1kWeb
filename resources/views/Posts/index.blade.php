@extends('layouts.app')

@section('content')
                @if(count($posts)>0)
                    @foreach($posts as $post)
                        <div class="well">
                            <h3><a href="/posts/{{$post->id}}">{{$post->title}}</a></h3>
                            <p style="color: black; font-size: 13px; font-family: Verdana; opacity: 50;">
                               {{$post->description}}
                            </p>
                        </div>
                    @endforeach

                @else
                    <p>no posts found</p>
                @endif
@endsection