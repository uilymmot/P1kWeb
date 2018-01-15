@extends('layouts.app')

@section('bod')
    <script type="text/javascript" src="{{ asset('js/bricks.js') }}"></script>

    <div class="game-div">
        <canvas id="brick-canvas" width="500%" height="500%" onclick="playBricks()">
        </canvas>
    </div>
@endsection