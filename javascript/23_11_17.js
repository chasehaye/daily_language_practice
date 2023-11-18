const randomArr = [6, 7, 4, 3, 2, 9, 10, 1, 5, 8, 9]
let factorialnum = 3
const fibIteration = 4
const flips = 2

//max
function findMax(arr){
    let num = arr[0]
    for (i=0; i<arr.length; i++){
        if( arr[i] > num) {
            num = arr[i];
        }
    }
    return num
}
console.log("findMax result:")
console.log(findMax(randomArr))
//factorial
function factorial(int){
    let total = 1
    for ( i=int; i>0; i--){
        total = total * i
    }
    return total

}
console.log("factorial result:")
console.log(factorial(factorialnum))
//fibonacci
function fibonacci(int){
    // This function returns the Nth number in the fibonacci sequence.
    // For this function, the first two fibonacci numbers are 1 and 1
    // Fibonacci sequence is the sum of the two preceeding sums
    let int1 = 1
    let int2 = 1
    for( i=2; i<int; i++){
        let total = int1 + int2
        int1 = int2
        int2 = total
    }
    return int2
}
console.log("fibonacci result:")
console.log(fibonacci(fibIteration))

function coinFlips(int){
    // This function returns an array of all possible outcomes from flipping a coin N times.
    // Input type: Integer
    // For example, coinFlips(2) would return the following:
    // ["HH", "HT", "TH", "TT"]
    // H stands for Heads and T stands for tails
    // Represent the two outcomes of each flip as "H" or "T"


    return int <= 0 ? [''] : [...coinFlips(int - 1).map (r => 'H' + r), ...coinFlips(int - 1).map (r => 'T' + r)]
}
console.log("coin flip result:")
console.log(coinFlips(flips))

function letterCombinations(){
    // This function returns an array of all combinations of the given letters
    // Input type: Array of single characters
    // For example, letterCombinations(["a","b","c"]) would return the following:
    // ["a","b","c","ab","ac","ba","bc","ca","cb","abc","acb","bac","bca","cab","cba"]
}


//