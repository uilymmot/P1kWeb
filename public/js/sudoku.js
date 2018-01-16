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
}
