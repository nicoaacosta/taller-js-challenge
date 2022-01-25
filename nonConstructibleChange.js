const testCases = {
    testCoins1: [5, 7, 1, 1, 2, 3, 22],
    testCoins2: [1, 1, 1, 1, 1],
    testCoins3: [1, 5, 1, 1, 1, 10, 15, 20, 100],
}

// function to be used on mergeSort in order to merge arrays
function merge(left, right) {
    let sortedArr = [];
  
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        sortedArr.push(left.shift());
      } else {
        sortedArr.push(right.shift());
      }
    }
  
    // use spread operator in case of uneven length 
    return [...sortedArr, ...left, ...right];
}

// function to be used on getMinimunChange as array needs to be ordered
function mergeSort(arr) {
    const half = arr.length / 2;
  
    // the base case is array length <=1
    if (arr.length <= 1) {
      return arr;
    }
    
    // returns the first half of the array and remove from arr
    const left = arr.splice(0, half); 

    //the remaining half
    const right = arr;

    return merge(mergeSort(left), mergeSort(right));
}

const getMinimumChange = coins => {
	let orderedCoins = mergeSort(coins) // array needs to be ordered
	let sum = 1 // the minimum sum possible
	for (let i = 0; i < orderedCoins.length; i++) {
		// if element evaluated is bigger than current sum, evaluation ends 
		if (orderedCoins[i] > sum) {
			break
		}
		sum += orderedCoins[i]
	}
	return sum
}

// TEST CASE 1
console.log('Original: ', testCases.testCoins1)
console.log('Minimun Change: ', getMinimumChange(testCases.testCoins1))

// TEST CASE 2
console.log('Original: ', testCases.testCoins2)
console.log('Minimun Change: ', getMinimumChange(testCases.testCoins2))

// TEST CASE 3
console.log('Original: ', testCases.testCoins3)
console.log('Minimun Change: ', getMinimumChange(testCases.testCoins3))
