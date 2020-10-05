/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

  var allAnagrams = function(string) {
    const result = {}

    function getAnagrams(word, original){
      if(word.length === string.length){
        result[word] = true;
      } else {
        for(var i = 0; i < original.length; i++){
          let current = word + original[i];
          let remain = original.slice(0,i) + original.slice(i+1)
          getAnagrams(current, remain)
        }
      }
    }

    getAnagrams('', string)
    return Object.keys(result)

  }

//edge cases, string can have no length

//use recursion
//feed string into a recursive function
//the recursive function produces a string of the original string length and pushes it into the result array
//use true and false values so that we dont double count
//return keys of the result object


//input: string, with letters, no spaces
//output: array of strings, same length, no repetition
//constraints: letters do not repeat
//edge cases: if empty string, output empty array

// [ 'abcd', 'adcb', 'acdb', 'abdc', 'bac', 'bca', 'cab', 'cba' ]

//create a result array
//loop over the string
 //create word variable
 //set first letter of word variable to be string[i]
  //


  // var allAnagrams = function(string) {
  //   //declare an results object
  //   //declare an initial anagram string
  //   const results = {};
    
  //   //innner recursive 
  //   const inner = function(anagram, rem) {
  //     //base case -> anagram.length === string length
  //       //add anagram to results object -> object.anagram = true; 
  //     if (anagram.length === string.length) {
  //       results[anagram] = true;
  //     }
      
  //     //recursive case
  //     //use slice to grab remainding options from rem
  //     for (let i = 0; i < rem.length; i++) {
  //       var options = rem.slice(0, i) + rem.slice(i+1);      
  //       inner(anagram+rem[i], options)
  //     }

  //   }
  //   //invoke inner recursive function
  //   inner('', string);
  
  //   //return the non repeated anagrams (keys of the object)
  //   return Object.keys(results);
  // }