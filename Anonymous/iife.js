          
/*
//               1.PRINT ODD NUMBERS 

 (function() {
    for (var i = 0; i <= 10; i++) {
      if (i % 2 !== 0) {
        console.log(i)
      }
    }
  })();
  
*/

//-------------------------------------------------------------------------------------




//              2.conver all the strings to title caps in s string array
/*
(function() {
  let stringArray = ["hello world", "This is for task Submittion", "javascript program"];

  let toTitleCase = function(str) {
    return str
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  let convertTitle = (strArray) => {
    return strArray.map(str => toTitleCase(str));
  }

  const titleArray = convertTitle(stringArray);
  console.log(titleArray);
})();

*/

 


//-----------------------------------------------------------------------------------
/*

 //                                3.PRINT SUMS IN ARROW FUNCTION
 (function() {
  var numbers = [1, 3, 4, 5, 6, 7];
  var sum = 10;

  var sumNumbers = function() {
    for (var i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    console.log(sum);
  }

  sumNumbers();
})();

*/

//---------------------------------------------------------------------------------
 
 //                                      4.FUNCTION PRIME NUMBER

/*

(function() {
var n = 100; // Change this value to the desired upper limit
for (var i = 2; i <= n; i++) {
  var isPrime = true;

  for (var j = 2; j < i; j++) {
    if (i % j === 0) {
      isPrime = false;
      break; 
    }
  }

  if (isPrime) {
    console.log(i); 
  }
}
})();

*/


//------------------------------------------------------------------------------------


 //                          5.RETURN ALL THE PALINDROMS IN AN ARRAY

   /*                         
                            
(function() {
let inputArray = ["mam","dad","racecar", "hello", "level","deified"];
let polindromeArray=[]; 

for (var i=0; i<inputArray.length; i++) {
   const item=inputArray[i];
  const cleanStr = item.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const reversedStr = cleanStr.split('').reverse().join('');

  if (cleanStr === reversedStr) {
    polindromeArray.push(item);
  }
  }

console.log(polindromeArray);

})();

*/

//-------------------------------------------------------------------------------------------------------------------------------------------------                    
                                                          
                              
//  
/*                               6.Return median of two sorted arrays of the same size.

(function () {
  let a1 = [5, 6];
  let a2 = [7, 8];

  const merged = [...a1, ...a2].sort((a, b) => a - b);
  const length = merged.length;

  if (length % 2 === 0) {
    let middle1 = merged[length / 2 - 1];
    let middle2 = merged[length / 2];
    let median = (middle1 + middle2) / 2;
    console.log(median);
  } else {
    let median = merged[Math.floor(length / 2)];
    console.log(median);
  }
})();

*/

//---------------------------------------------------------------------------------------------------------------------------------------

//                             7. REMOVE DUPLICATES FROM AN ARRAY
/*

(function(arr) {
  let unique = [];
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let item = arr[i];
    if (!unique.includes(item)) {
      unique.push(item);
    }
  }
  console.log(unique); 
})([1, 2, 2, 3, 4, 4, 5]); 
const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
(function(arr) {
  let unique = [];
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let item = arr[i];
    if (!unique.includes(item)) {
      unique.push(item);
    }
  }
  console.log(unique); 
})(arrayWithDuplicates);

*/
//----------------------------------------------------------------------------------------------------------------------------------------
/*
//                                  ROTATE AN ARRAY BY K TIMES
(function() {
  var arr = [1, 3, 5, 7, 8, 9, 10];

  const rotatektimes = function(arr, k) {
    for (let i = 0; i < k; i++) {
      arr.unshift(arr.pop());
      console.log(arr);
    }
  }

  rotatektimes(arr, 3);
})();

*/