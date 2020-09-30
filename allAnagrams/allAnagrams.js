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
    //declare an results object
    //declare an initial anagram string
    const results = {};
    
    //innner recursive 
    const inner = function(anagram, rem) {
      //base case -> anagram.length === string length
        //add anagram to results object -> object.anagram = true; 
      if (anagram.length === string.length) {
        results[anagram] = true;
      }
      
      //recursive case
      //use slice to grab remainding options from rem
      for (let i = 0; i < rem.length; i++) {
        var options = rem.slice(0, i) + rem.slice(i+1);      
        inner(anagram+rem[i], options)
      }

    }
    //invoke inner recursive function
    inner('', string);
  
    //return the non repeated anagrams (keys of the object)
    return Object.keys(results);
  }


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
