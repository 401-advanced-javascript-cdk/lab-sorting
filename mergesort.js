'use strict';

/**
 * This method assumes sorting in ascending order
 * @param items
 * @returns {Array} : Sorted array ;)
 */
const mergeSort = items => {
  // --------------------------------------------------------------
  // BASE CASES
  // --------------------------------------------------------------
  if (items.length < 2) {
    return items;
  }

  if (items.length === 2) {
    return items[0] < items[1] ? items : items.reverse();
  }
  // --------------------------------------------------------------
  //  RECURSIVE CASES
  // --------------------------------------------------------------

  const middlePoint = Math.floor(items.length / 2);
  const leftSide = mergeSort(items.slice(0, middlePoint));
  const rightSide = mergeSort(items.slice(middlePoint));

  let output = [];

  let leftIndex = 0;
  let rightIndex = 0;

  while(leftIndex < leftSide.length && rightIndex < rightSide.length) {
    if(leftSide[leftIndex] <= rightSide[rightIndex]) {
      output.push(leftSide[leftIndex]);
      leftIndex++;
    }
    else {
      output.push(rightSide[rightIndex]);
      rightIndex++;
    }
  }

  while(leftSide[leftIndex]) {
    output.push(leftSide[leftIndex]);
    leftIndex++;
  }
  while(rightSide[rightIndex]) {
    output.push(rightSide[rightIndex]);
    rightIndex++;
  }

  return output;
};


console.log(mergeSort([1]));
console.log(mergeSort([1, 2]));
console.log(mergeSort([2,1,3,33,6,4,9,8,7,5,12,0]));