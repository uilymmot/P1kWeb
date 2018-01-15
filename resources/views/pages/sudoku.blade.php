@extends('layouts.app')

@section('bod')
    <?php
    $colCount = 0;
    $rowCount = 0;
    ?>

    <div class="sudoku-wrapper">
        @while ($colCount < 9)
            <div class="sudoku-row">
                @while ($rowCount < 9)
                    <input title="sud-row" type="number" name="sudoku-inputs" value=".">
                    <?php $rowCount += 1; ?>
                @endwhile
            </div>
            <?php $colCount += 1;
                  $rowCount = 0; ?>
        @endwhile
    </div>
@endsection