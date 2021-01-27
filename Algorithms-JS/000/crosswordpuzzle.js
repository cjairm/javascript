(function() {
    const crosswordPuzzle = [
        [1,1,0,0,1,0,1],
        [0,1,0,1,0,1,0],
        [1,0,1,0,1,0,1],
        [1,0,1,0,1,0,1],
        [0,1,0,1,0,1,0],
        [1,0,1,0,0,1,1]
    ];

    // revisar horarizontalmente si las filas son simetricas
    function isSymmetrical(cp) {
        let i = 0;
        let j = cp.length - 1;

        while (i < j) {
            const rowUp = cp[i];
            const rowDown = cp[j];
            let k = 0;
            let l = rowUp.length - 1;

            while (k <= rowUp.length - 1 && l >= 0) {
                const currLeft = rowUp[k];
                const currRight = rowDown[l];

                if (currLeft !== currRight) return false;
                k++;
                l--;
            }

            i++;
            j--;
        }

        return true;
    }

// currLeft = 1
// currRight = 1
//
//      l           k
//     [1,1,0,0,1,0,1] -> rowUp
//      i
//     [0,1,0,1,0,1,0]
// 
//     [1,0,1,0,1,0,1]
// 
//     [1,0,1,0,1,0,1]
// 
//     [0,1,0,1,0,1,0]
// 
//     [1,0,1,0,0,1,1] -> rowDown
//                  j

    console.log(isSymmetrical(crosswordPuzzle));
}())
