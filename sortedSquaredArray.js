const testCases = {
    testArray1: [1, 2, 3, 5, 6, 8, 9],
    testArray2: [-2, -1],
    testArray3: [-10, -5, 0, 5, 10],
}

const squareArray = arr => {
    const auxArray = [...arr]
    for (let i = 0; i < auxArray.length; i++) {
        auxArray[i] *= auxArray[i];    
    }
    return auxArray
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

function mergeSort(arr) {
    const half = arr.length / 2;
  
    // the base case is array length <=1
    if (arr.length <= 1) {
      return arr;
    }
    
    // returns the first half of the array and remove from arr
    const left = arr.splice(0, half); 

    // the remaining half
    const right = arr;

    return merge(mergeSort(left), mergeSort(right));
}

// alternative sorting function
const bubbleSort = arr => {
    const auxArray = [...arr]
    for (let i = 0; i < auxArray.length -1 ; i++) {
        for (let j = i + 1; j < auxArray.length; j++) {
            if (auxArray[i] > auxArray[j]) {
                let aux = auxArray[i]
                auxArray[i] = auxArray[j]
                auxArray[j] = aux
            }
        }
    }
    return auxArray
}

const orderedSquare = arr => mergeSort(squareArray(arr))

//TEST CASE 1
console.log('Sorted squared array: ', orderedSquare(testCases.testArray1))
console.log('Original array: ', testCases.testArray1)

//TEST CASE 2
console.log('Sorted squared array: ', orderedSquare(testCases.testArray2))
console.log('Original array: ', testCases.testArray2)

//TEST CASE 3
console.log('Sorted squared array: ', orderedSquare(testCases.testArray3))
console.log('Original array: ', testCases.testArray3)
