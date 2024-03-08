function findTargetInArray(array, target) {
  let leftIndex = 0;
  let rightIndex = array.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

    if(array[middleIndex] === target) {
      return middleIndex;
    }

    if (array[middleIndex] > target) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }

  return -1;
}


// should return 3
console.log(findTargetInArray([1, 3, 4, 5, 6, 8, 9], 5));