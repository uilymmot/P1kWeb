@extends('layouts.app')

@section('bod')
    <script type="text/javascript" src="{{ asset('js/snakes.js') }}"></script>

    <div class="game-div">
        <canvas id="snakes-canvas" width="500%" height="500%" onclick="playSnakes()"></canvas>
    </div>
@endsection