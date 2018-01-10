@extends('layouts.app')

@section('content')
    <div class="dell-wrap">
        <div class="h1 dell"><?php
            echo 'page opened on: ' . date('m/d/Y h:i:s a', time());
            ?></div>

        <div class="dell">
            <button type="button" onclick="flipCoin()" autofocus="autofocus">Flip a coin!</button>
        </div>

        <div class="dell">
            Get Random Number between: <input name="textbox1" id="textbox1" type="number"> and <input name="textbox2" id="textbox2" type="number">. <button type="button" onclick="getRandomVal()"> get number</button>
        </div>
    </div>
    <br/>
    <br/>
@endsection

@section('bod')
    <div class="content-1">
        <div class="canvas-div">
            <canvas id="valCan">
            </canvas>
        </div>

        <div class="canvas-div-1">
            <canvas width="500px" height="500px" id="brickBreaker" onclick="playGame()">
            </canvas>
        </div>
    </div>
@endsection