

                            //1.PRINT ODD NUMBERS USING ARROW FUNCTION

let printOddNumbers =()=> {
    for (var i = 0; i <= 10; i++) {
      if (i % 2 !== 0) {
        console.log(i)
      }
    }
  }
  printOddNumbers();


//-------------------------------------------------------------------------------------


/*

                   //2.conver all the strings to title caps in s string array//

const stringArray = ["hello world", "This is for task Submittion", "javascript program"];
let toTitleCase=(str)=> {
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
                              //3.PRINT SUMS IN ARROW FUNCTION
  
var numbers = [1,3,4,5,6,7,]
sum=10;
let sumNumbers = ()=> {
  for(var i =0; i< numbers.length; i++){
    sum+=numbers[i];
}
console.log(sum);
}
sumNumbers(); 

*/

//---------------------------------------------------------------------------------
 

                     //4.FUNCTION PRIME NUMBER


/*
var primeNumber= ()=> {
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


                            //RETURN ALL THE PALINDROMS IN AN ARRAY

  /*                          
                            
let palindromes = ()=> {
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