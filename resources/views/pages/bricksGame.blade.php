@extends('layouts.app')

@section('bod')
    <div class="game-div">
        <canvas id="brick-canvas" width="500%" height="500%" onclick="playBricks()">
        </canvas>
    </div>
@endsection