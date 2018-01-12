@extends('layouts.app')

@section('bod')
    <div class="game-div">
        <canvas id="snakes-canvas" width="500%" height="500%" onclick="playGame()"></canvas>
    </div>
@endsection