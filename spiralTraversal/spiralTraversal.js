/*
 * Write a function that accepts a 2-dimensional array (that is, an array containing many same-length arrays),
 * and prints out every value found, but in a spiral from the upper left in to the center
 * Please write some form of specs, tests, or assertions for your code, and check as many edge cases as you can think of
 *
 * example:

    spiralTraversal([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);

    [1,2,3,6,9,8,7,4,5]

    [1, 2, 7, 9, 5, 8]

    3 x 3

    2,2,2,1,1,1

    rows: 2,2,1
    columns: 2,1,1

    spiralTraversal([
      [1,2,3,4],
      [4,5,6,7],
      [7,8,9,9]
    ]);

    4 x 3

    3,2,3,1,2,1
    
    rows: 3,3,2
    columns: 2,1,1

    for rows we drop after a reverse, column we drop after a forward. we do 1 twice
    
    rowTouched = true

    rowLength: 1
    colLength: 1
    row: 1
    col: 2

    result: [1,2,3,4,7,9,9,9,8,7,7,4,5,6,]

    spiralTraversal([
      [1,2,3,4],
      [4,5,6,7],
      [8,9,10,11],
      [12,13,14,15]
    ]);
    
    4 x 4
    
    3,3,3,2,2,1,1,1

    rows: 3,3,2,1
    columns: 3,2,1,1

    spiralTraversal([
      [1,2,3,4,5],
      [4,5,6,7,8],
      [7,8,9,9,9],
      [7,8,9,9,9],
      [7,8,9,9,9]
    ]);

    5 x 5

    4,4,4,3,3,2,2,1,1,1

    rows: 4,4,3,2,1
    columns: 4,3,2,1,1

    SpiralTraversal([
      [1,2,3,4,5,6],
      [4,5,6,7,8,6],
      [7,8,9,9,9,6],
      [7,8,9,9,9,6],
      [7,8,9,9,9,6],
      [7,8,9,9,9,6]
    ]);

    6 x 6

    5,5,5,4,4,3,3,2,2,1,1,1



    returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
 */

var spiralTraversal = function (matrix) {
  // rowLength as matrix[0].length - 1
  let rowLength = matrix[0].length - 1;
  // columnLength as matrix.length - 1
  let colLength = matrix.length - 1;
  // row = 0
  let row = 0;
  // col = matrix.length -1
  let col = matrix.length - 1;
  // rowTouched = false -> have rowTouched in reverseRow set rowTouched = true
  let rowTouched = false;
  // declare result array
  const result = [];
  debugger;

  // while rowLength > 0 && colLength > 0
  while (rowLength > 0 && colLength > 0) {
    // forwardRow
    // loop over matrix[row] at i < rowLength
    // push each item into result array
    // rowLength-- if rowTouched = true

    for (let i = 0; i < rowLength; i++) {
      result.push(matrix[row][i]);
      if (rowTouched) {
        rowLength--;
      }
    }

    // forwardCol
    // loop over matrix at i < colLength
    // push items at matrix[col] into result
    // if colLength != 1, colLength--

    for (let i = 0; i < colLength; i++) {
      result.push(matrix[i][col]);
    }
    if (colLength !== 1) {
      colLength--;
    }

    // reverseRow
    // reverse loop over maxtrix[matrix.length - 1 - row] at i < rowLength
    // push items at maxtrix[matrix.length - 1 - row][i]
    // rowLength--
    // rowTouched = true
    // row++
    for (let i = rowLength; i > 0; i--) {
      result.push(matrix[matrix.length - 1 - row][i]);
      rowTouched = true;
    }
    rowLength--;
    row++;

    // reverseCol
    // reverse loop over matrix at i < colLength
    // push items at matrix[col] into result
    // colLength--
    // col--
    for (let i = colLength; i > 0; i--) {
      result.push(matrix[matrix.length - i][matrix.length - 1 - col])
    }
    colLength--;
    col--;
  }

  // return result array
  return result;
};


//check if multiple for loops with i variables work with var instead of let

// input: array of even sized arrays
// output: returns array of sorted numbers
// constraints: 
// edge cases: what if length of individual array is 1? or 2? what if we only have 1 array?

// we would need to go around in a circle
// let array length = maxtrix[0].length

// start by loop over maxtrix[0]array[0] in forward direction
// then loop over matrix at [arrayLength-1]
// then reverse loop matrix[maxtrix.length - 1]
// then reverse loop over matrix at [0]

// scrap all that

// rowLength as matrix[0].length - 1
// columnLength as matrix.length - 1
// row = 0
// col = matrix.length -1
// rowTouched = false -> have rowTouched in reverseRow set rowTouched = true


// declare result array

// while rowLength > 0 && colLength > 0
 // forwardRow
  // loop over matrix[row] at i < rowLength
  // push each item into result array
  // rowLength-- if rowTouched = true

 // forwardCol
  // loop over matrix at i < colLength
  // push items at matrix[col] into result
  // if colLength != 1, colLength--

 // reverseRow
  // reverse loop over maxtrix[matrix.length - 1 - row] at i < rowLength
  // push items at maxtrix[matrix.length - 1 - row][i]
  // rowLength--
  // rowTouched = true
  // row++

 // reverseCol
  // reverse loop over matrix at i < colLength
  // push items at matrix[col] into result
  // colLength--
  // col--

// return result array

// if rowTouched, rowLength - 1