@extends('layouts.app')

@section('content')
    @if(count($posts)>0)
        @foreach($posts as $post)
            <div class="projectitem">
                <h3><a href="/posts/{{$post->id}}">{{$post->title}}</a></h3>
                <p>
                    {{$post->description}}
                </p>
            </div>
        @endforeach
    @else
        <p>no projects found</p>
    @endif
    
@endsection