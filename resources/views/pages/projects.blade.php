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


    <!-- This is a flexbox hack, it would be a much better idea
         to use grid for the layout since it wouldn't require this hack
         but im too proud of this to get rid of it -->
    @while(true)
        @if ($count % 3 == 0)
            <?php break ?>
        @endif
        <div class="invisibleProjectItem"> </div>
        <?php $count++ ?>
    @endwhile
@endsection