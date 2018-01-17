function solveTheSudoku() {
    let inputs = document.getElementsByClassName('sudoku-in');

    let vals  = [].map.call(inputs, function( input ) {
        if (input.value.length === 0)
            return '.';
        else
            return input.value;
    }).join('');

    document.getElementById('sudoku-string').value = vals;

    let sudokuRows = generateRows([]);
    let sudokuCols = generateCols([]);
    let sudokuNines = generateNines([]);

    if (!rcnValid()) alert('Not a valid sudoki');

    alert(sudokuRows);
    alert(findFirstDot(sudokuRows));

    function generateRows (re) {
        for (let i = 0; i < 9; i++) {
            let tempRow = [];
            for (let j = 0; j < 9; j++)
                tempRow.push(vals[(i*9) + j]);
            re.push(tempRow);
        }
        return re;
    }
    function generateCols (ce) {
        for (let i = 0; i < 9; i++) {
            let tempCol = [];
            for (let j = 0; j < 9; j++) {
                let t = sudokuRows[j];
                tempCol.push(t[i]);
            }
            ce.push(tempCol);
        }
        return ce;
    }
    function generateNines (ne){
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
            ne.push(tempNine);
        }
        return ne;
    }
    function isNineValid (x) {
        let first = x.shift();
        if (x.length === 0) return true;
        for (let i = 0; i < x.length; i++)
            if (x[i] === first && x[i] !== '.') return false;
        return isNineValid(x);
    }
    function isAllValid (x) {
        for (let i = 0; i < x.length; i++)
            if (!isNineValid(x[i])) return false;
        return true;
    }
    function rcnValid () {
        let r = jQuery.extend(true, {}, sudokuRows);
        let c = jQuery.extend(true, {}, sudokuCols);
        let n = jQuery.extend(true, {}, sudokuNines);
        for (let i = 0; i < 9; i++)
            if (!isAllValid(r) ||
                !isAllValid(c) ||
                !isAllValid(n))
                return false;
        return true;
    }
    function insertOneInto (arrArr) {
        let xy = findFirstDot(arrArr);
        let tempArr = [];
        for (let i = 0; i < 9; i++) {
            let newArr = arrArr[xy[0]].splice(xy[1], 1, i);
            if (isAllValid(newArr))
                tempArr.add();
        }
        return tempArr;
    }
    function findFirstDot(arrArr) {
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j ++)
                if (arrArr[i][j] === '.')
                    return [i, j];
        }
        return null;
    }

    /* For timing later on
    var t0 = performance.now();
    doSomething();
    var t1 = performance.now();
     */
}
