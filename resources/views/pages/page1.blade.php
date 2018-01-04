@extends('layouts.app')

@section('content')
    <button type="button" onclick="home()">Home</button>

    <div class="h1"><?php
        echo 'page opened on: ' . date('m/d/Y h:i:s a', time());
        ?></div>

    <button type="button" onclick="flipCoin()" autofocus="autofocus">Flip</button>

    <br/><br/><br/>

    Get Random Number between: <input name="textbox1" id="textbox1" type="number"> and <input name="textbox2" id="textbox2" type="number">. <button type="button" onclick="getRandomVal()"> get number</button>

@endsection

@section('bod')
    <canvas class="snakes" id="snakes-canvas"></canvas>
@endsection