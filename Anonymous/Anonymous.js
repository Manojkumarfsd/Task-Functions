           
/*
//               1.PRINT ODD NUMBERS 

let printOddNumbers = function() {
    for (var i = 0; i <= 10; i++) {
      if (i % 2 !== 0) {
        console.log(i)
      }
    }
  }
  printOddNumbers();

*/
//-------------------------------------------------------------------------------------




//              2.conver all the strings to title caps in s string array

/*

let stringArray = ["hello world", "This is for task Submittion", "javascript program"];
let toTitleCase=function(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

let convertTitle=(strArray)=> {
  return strArray.map(str => toTitleCase(str));
}


const titleArray = convertTitle(stringArray);
console.log(titleArray);   
*/

//-----------------------------------------------------------------------------------
/*

 //                                3.PRINT SUMS IN ARROW FUNCTION
  
var numbers = [1,3,4,5,6,7,]
sum=10;
let sumNumbers = function() {
  for(var i =0; i< numbers.length; i++){
    sum+=numbers[i];
}
console.log(sum);
}
sumNumbers(); 

*/

//---------------------------------------------------------------------------------
 
 //                                      4.FUNCTION PRIME NUMBER


/*
var primeNumber= function() {
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
}
primeNumber();

*/

//------------------------------------------------------------------------------------


 //                          5.RETURN ALL THE PALINDROMS IN AN ARRAY

  /*                          
                            
let palindromes = function() {
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

}
palindromes();

*/

//-------------------------------------------------------------------------------------------------------------------------------------------------                    
                                                          
 /*                              
//                                 6.Return median of two sorted arrays of the same size.

let findMedian =function (a1, a2) {
  const merged = [...a1, ...a2].sort((a, b) => a - b);
  const length = merged.length;

  if (length % 2 === 0) {
    let middle1 = merged[length / 2 - 1];
    let middle2 = merged[length / 2];
    return (middle1 + middle2) / 2;
  } else {
    return merged[Math.floor(length / 2)];
  }
}

let a1 = [5, 6];
let a2 = [7, 8];
let median = findMedian(a1, a2);
console.log(median); 

*/
//---------------------------------------------------------------------------------------------------------------------------------------

//                             7. REMOVE DUPLICATES FROM AN ARRAY

/*
let findDuplicates= function(arr) {
    let unique = [];
    let n = arr.length;
    for (let i = 0; i < n; i++) {
      let item = arr[i];
      if (!unique.includes(item)) {  
        unique.push(item);
      }
    }
    return unique;
  }
  
  const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
  const unique= findDuplicates(arrayWithDuplicates);
  
  console.log(unique); 
*/

//----------------------------------------------------------------------------------------------------------------------------------------

//                                  ROTATE AN ARRAY BY K TIMES

/*
var arr=[1,3,5,7,8,9,10]
const rotatektimes=function(arr,k){
for(let i=0; i<k; i++){
  console.log(arr.unshift(arr.pop()))
  console.log(arr)
}
}

rotatektimes(arr,3)
*/