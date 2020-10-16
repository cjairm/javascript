/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let i = 0,
        j = 0,
        temp = 0;

    while (i < matrix.length) {
        if (matrix[i][j] == target) return true;

        temp = matrix[i][j];
        j++;
        if (j >= matrix[i].length) {
            i++;
            j = 0;
        }
    }

    return false;
};
