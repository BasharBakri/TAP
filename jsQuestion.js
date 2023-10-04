// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].


/*
First solution with nested loop:-

Time complexity: O(n^2)
Space complexity: O(1)

*/

const solutionOne = function (arr, target) {

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) return [i, j];
      // since we know there is exactly one solution, this should be enough.
    }
  }
};


/*
Second solution with a Hash map:-

Time complexity: O(n)
Space complexity: O(n)

*/

const solutionTwo = function (arr, target) {

  let obj = {};

  for (let i = 0; i < arr.length; i++) {

    if (obj.hasOwnProperty([arr[i]])) {

      // If the object has the array value as a key that means we have the solution. Check commetns under.
      // I return the current index and the value of the prev obj key as the solution.
      // I used .hasOwnProperty because it avoids some bugs related to falsy values. 

      return [obj[arr[i]], i];
    } else {
      obj[target - arr[i]] = i;
      // Since we know there is always a solution and one number + another will equal to the target 
      // I will save  an object key as the difference between the array value and target, and the value as the index to access it later.
    }
  }
};

console.log('Solution One:', solutionOne([2, 7, 11, 15], 9)); // [0,1];
console.log('Solution Two:', solutionTwo([3, 1, 2, 4], 6)); // [2,3];

// Feel free to add more test cases.