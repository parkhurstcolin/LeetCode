/**
 * @param {number[][]} nums
 * @return {number}
 */
var diagonalPrime = function(nums) {
    
  var isPrime = function(n){
      if(n == 1) return false;
      for(let i = 2; i <= Math.sqrt(n); i++){
          if(n%i == 0) return false;
      }
      return true;
  }
  
  let max = 0;
  
  for(let i = 0; i < nums.length; i++){
      let n1 = nums[i][i];
      let n2 = nums[i][nums.length - i -1];
      if(isPrime(n1)) max = Math.max(max, n1);
      if(isPrime(n2)) max = Math.max(max, n2);
  }
  
  return max;
};