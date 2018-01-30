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
                    <input title="sud-row"
                           type="number"
                           name="sudoku-inputs"
                           class="sudoku-in"
                           value="."
                           id="txt"
                           maxlength="1"
                           pattern="\d*"
                           max="9"
                           min="1"
                           oninput="if (this.value.length > this.maxLength)
                               this.value = this.value.slice(0, this.maxLength);" />
                    <?php $rowCount += 1; ?>
                @endwhile
            </div>
            <?php $colCount += 1;
            $rowCount = 0; ?>
        @endwhile
        <br/>
        <input type="text" id="sudoku-string" title="unsolved-sud-string">
        <input type="text" id="solved-sudoku-string" title="solved-sud-string">
        <br/>
            <button onclick="turnSudokuIntoString()" id="butt">Turn sudoku into string</button>
        <button onclick="solveTheSudoku()" id="butt">Solve!</button>
    </div>
@endsection