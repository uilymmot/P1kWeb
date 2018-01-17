function solveTheSudoku() {
    let inputs = document.getElementsByClassName('sudoku-in');

    let vals  = [].map.call(inputs, function( input ) {
        if (input.value.length === 0)
            return '.';
        else
            return input.value;
    }).join('');

    document.getElementById('sudoku-string').value = vals;

    {
        let sudokuRows = [];
        generateRows();
        let sudokuCols = [];
        generateCols();
        let sudokuNines = [];
        generateNines();
    }

    alert(rcnValid());

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
        let splitter = 0;
        for(let i = 0; i < 9; i++) {
            let tempNine = [];
            tempNine.push(vals[splitter]);
            tempNine.push(vals[splitter+1]);
            tempNine.push(vals[splitter+2]);
            tempNine.push(vals[splitter+9]);
            tempNine.push(vals[splitter+10]);
            tempNine.push(vals[splitter+11]);
            tempNine.push(vals[splitter+18]);
            tempNine.push(vals[splitter+19]);
            tempNine.push(vals[splitter+20]);

            if (((i+1) % 3) === 0) splitter += 21;
            else splitter += 3;
            sudokuNines.push(tempNine);
        }
    }

    function isNineValid (x) {
        let first = x.shift();
        if (x.length === 0) return true;
        for (let i = 0; i < x.length; i++) {
            if (x[i] === first && x[i] !== '.') return false;
        }
        return isNineValid(x);
    }
    function isAllValid (x) {
        for (let i = 0; i < x.length; i++) {
            if (!isNineValid(x[i])) return false;
        }
        return true;
    }
    function rcnValid () {
        for (let i = 0; i < 9; i++) {
            if (!isAllValid(sudokuRows) ||
                !isAllValid(sudokuCols) ||
                !isAllValid(sudokuNines)) {
                return false;
            }
        }
        return true;
    }


    /* For timing later on
    var t0 = performance.now();
    doSomething();
    var t1 = performance.now();
     */
}
