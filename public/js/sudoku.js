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
    let constraintsR = [];
    let constraintsC = [];
    let constraintsN = [];
    let constraints = generateListOfConstraints();

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
        for (let i = 0; i < 9; i++) {
            constraintsR.push(constraintsOfABlock(sudokuRows[i]));
            constraintsC.push(constraintsOfABlock(sudokuCols[i]));
            constraintsN.push(constraintsOfABlock(sudokuNines[i]));
        }
        rcnToConstraints();
    }
    function rcnToConstraints() {
        let temp = [];
        for (let i = 0; i < 81; i++) {
            if (vals[i] !== ".") {
                temp.push([]);
                console.log("Nothing");
            }
            else {
                let x = Math.floor(i / 9);
                let y = i % 9;
                let z = boxLookup(x, y);
                let int = array_intersect(constraintsR[x], constraintsC[y], constraintsN[z]);
                if (int.length === 0) alert("not a valid sudoki");
                temp.push(int);
                console.log(int);
            }
        }
        constraints = temp;
    }
    function updateConstraints(indice, value) {
        constraints = [];
        let x = Math.floor(indice / 9);
        let y = indice % 9;
        let z = boxLookup(x,y);

        let indR = constraintsR[x].indexOf(value);
        if (indR > -1) {
            constraintsR[x].splice(indR, 1);
        }
        let indC = constraintsC[y].indexOf(value);
        if (indC > -1) {
            constraintsC[y].splice(indC, 1);
        }
        let indN = constraintsN[z].indexOf(value);
        if (indN > -1) {
            constraintsN[z].splice(indN, 1);
        }
        rcnToConstraints();
        console.log(constraints);
    }
    function boxLookup(x, y) {
        x+=1;y+=1;
        if (x <= 3 && y <= 3) return 0;
        else if (x <= 3 && y <= 6) return 1;
        else if (x <= 3 && y <= 9) return 2;
        else if (x <= 6 && y <= 3) return 3;
        else if (x <= 6 && y <= 6) return 4;
        else if (x <= 6 && y <= 9) return 5;
        else if (x <= 9 && y <= 3) return 6;
        else if (x <= 9 && y <= 6) return 7;
        else if (x <= 9 && y <= 9) return 8;
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
function array_intersect() {let a,c,d,e,f,g=[],h={},i;i=arguments.length-1;d=arguments[0].length;c=0;for(a=0;a<=i;a++){e=arguments[a].length;if(e<d){c=a;d=e}}for(a=0;a<=i;a++){e=a===c?0:a||c;f=arguments[e].length;for(let j=0;j<f;j++){let k=arguments[e][j];if(h[k]===a-1){if(a===i){g.push(k);h[k]=0}else{h[k]=a}}else if(a===0){h[k]=0}}}return g}