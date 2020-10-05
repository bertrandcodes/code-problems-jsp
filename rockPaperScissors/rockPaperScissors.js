/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*
*/

var rockPaperScissors = function (n) {
    // have result array
    const res = {};
    const opt = ['R', 'S', 'P'];
    // have recursive function
    function comboMaker(combo) {
        if (combo.length === n) {
            res[combo] = true;
        } else {
            for (var i = 0; i < opt.length; i++) {
                comboMaker((combo + opt[i]))
            }
        }
    }
    // call recursive function that puts in empty string and length
    comboMaker('');
    // return result array
    return Object.keys(res);
};

// input: number of throws/length of array
// output: array of different combinations of RPS
// constraints: 
// edge case: input could be 0, return empty array

// have result array
// have recursive function
// call recursive function that puts in empty string and length
// return result array