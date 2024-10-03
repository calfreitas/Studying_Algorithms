// Instructions: 
// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

// R: i search for 2 methods to solve this problem
// 1- > sort // ordenation and pick the [0] index and [1]
// 2- > using for loop but getting the same index as the 1st and 2nd val for variables and start comparatives. 

function sumTwoSmallestNumbers(numbers) {  
    //<--sort // ordenation-->
    let sortedNumbers = numbers.sort((a,b) => a - b ) // in this case i use sort from smallest number to largest
    let sumNumbers = sortedNumbers[0] + sortedNumbers[1]
    return sumNumbers
}
    
    //<--for loop-->
function sumTwoSmallestNumbers(numbers) {     
    let firstNumber = numbers[0] // in this case i use index from my list of numbers to help me in my comparative.
    let secondNumber = numbers[1] 
    
    for( let k=0; k<numbers.length; k++ )
      if(numbers[k] < firstNumber){
        secondNumber = firstNumber
        firstNumber = numbers[k]
      } else if( numbers[k]>firstNumber && numbers[k]< secondNumber ){
        secondNumber = numbers[k]
      }
      let sumNumbers = firstNumber + secondNumber
      return sumNumbers
}