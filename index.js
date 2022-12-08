
  function hasTargetSum(arr, target) {
   
    for (let i = 0; i < arr.length; i++) {
      
      for (let j = 0; j < arr.length; j++) {
        
        if (i !== j && arr[i] + arr[j] === target) {
        
          return true;
        }
      }
    }
  
    
    return false;
  }
  

/* 
   O(n^2)
*/

/*
any two added array numbers === target 
*/

/*
loop through all numbers in the array
loop through all other numbers in the array
check if the current pair of numbers adds up to the target number
if so, return true
if we reach this point, it means that no pair of numbers in the array adds up to the target number
so we return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
