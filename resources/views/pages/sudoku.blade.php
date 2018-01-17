@extends('layouts.app')

@section('bod')
    <script type="text/javascript" src="{{ asset('js/sudoku.js') }}"></script>

    <?php
    $colCount = 0;
    $rowCount = 0;
    ?>

    <div class="sudoku-wrapper">
        @while ($colCount < 9)
            <div class="sudoku-row">
                @while ($rowCount < 9)
                    <input title="sud-row" type="number" name="sudoku-inputs" class="sudoku-in" value="." maxlength="1">
                    <?php $rowCount += 1; ?>
                @endwhile
            </div>
            <?php $colCount += 1;
            $rowCount = 0; ?>
        @endwhile
        <br/>
        <input type="text" id="sudoku-string">
        <input type="text" id="solved-sudoku-string">
        <br/>
        <button onclick="solveTheSudoku()" id="butt">Solve!</button>
    </div>
@endsection