function solveTheSudoku() {
    let inputs = document.getElementsByClassName('sudoku-in');

    let vals  = [].map.call(inputs, function( input ) {
        if (input.value.length === 0) {
            return '.';
        }
        else {
            return input.value;
        }
    }).join('');

    document.getElementById('sudoku-string').value = vals;

    let sudokuRows = [];
    generateRows();
    let sudokuCols = [];
    generateCols();
    let sudokuNines = [];

    function generateRows () {
        for (let i = 0; i < 9; i++) {
            let tempRow = [];
            for (let j = 0; j < 9; j++) {
                tempRow.push(vals[(i*9) + j]);
            }
            sudokuRows.push(tempRow);
        }
    }

    function generateCols () {
        for (let i = 0; i < 9; i++) {
            let tempCol = [];
            for (let j = 0; j < 9; j++) {
                let t = sudokuRows[j];
                tempCol.push(t[i]);
            }
            sudokuCols.push(tempCol);
        }
    }

    function generateNines (){
        for (let h = 0; h < 9; h++) {
            let tempNine = [];
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    tempNine.push(sudokuRows[i][j]);
                }
            }
            sudokuNines.push(tempNine);
        }


    }


    /* For timing later on
    var t0 = performance.now();
    doSomething();
    var t1 = performance.now();
     */
}
