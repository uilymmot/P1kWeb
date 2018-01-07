@extends('layouts.app')

@section('content')
    <?php $count = 0 ?>

    @if(count($posts)>0)
        @foreach($posts as $post)
            <?php $count++ ?>
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

    @if ($count % 3 != 0)
        <div class="invisibleProjectItem"> </div>
        <?php $count++ ?>
    @endif

@endsection