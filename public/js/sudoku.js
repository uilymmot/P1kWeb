function solveTheSudoku() {
    let inputs = document.getElementsByClassName("sudoku-in");

    let vals  = [].map.call(inputs, function( input ) {
        if (input.value.length === 0)
            return '.';
        else
            return input.value;
    }).join("");

    document.getElementById("sudoku-string").value = vals;

    let sudokuRows = generateRows([]);
    let sudokuCols = generateCols([]);
    let sudokuNines = generateNines([]);

    if (!rcnValid()) alert("Not a valid sudoki!");
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
            if (x[i] === first && x[i] !== ".") return false;
        return isNineValid(x);
    }
    function rcnValid() {
        let r = jQuery.extend(true, {}, sudokuRows);
        let c = jQuery.extend(true, {}, sudokuCols);
        let n = jQuery.extend(true, {}, sudokuNines);
        for (let i = 0; i < 9; i++)
            if (!isNineValid(r[i])
                || !isNineValid(c[i])
                || !isNineValid(n[i])) return false;
        return true;
    }
    function generateListOfConstraints() {
        let constraintsR = [];
        let constraintsC = [];
        let constraintsN = [];

        for (let i = 0; i < 9; i++) {
            constraintsR.push(constraintsOfABlock(sudokuRows[i]));
            constraintsC.push(constraintsOfABlock(sudokuCols[i]));
            constraintsN.push(constraintsOfABlock(sudokuNines[i]));
        }
        return [];
    }
    function constraintsOfABlock(blockOfNine) {
        let a = [1,2,3,4,5,6,7,8,9];
        for (let i = 0; i < blockOfNine.length; i++) {
            if (blockOfNine[i] === ".") continue;
            let index = a.indexOf(+blockOfNine[i]);
            if (index !== -1) a.splice(index,1);
        }
        return a;
    }
}
