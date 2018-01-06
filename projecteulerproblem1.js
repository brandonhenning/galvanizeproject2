/*Project Euler Problem: https://projecteuler.net/problem=1

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.

I thought about solving this problem with a Javascript function using a ‘divisible by’ test. I wrote the function to take in a number and then starting at zero have it count up to the number checking at every integer if it is divisible by either three or five. If the integer passes that test it is added to the total. The function then returns the total of all the numbers between zero and the input number.
Below is the function.
*/



var getMultiplesThreeFive = function(num){
  var total = 0;
  for (var i=0; i<num; i++){
    if (i % 3 === 0 || i % 5 === 0){
      total += i;
    }
  }
  return total;
}

getMultiplesThreeFive(1000);  // returns 233,168
