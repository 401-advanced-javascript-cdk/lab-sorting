'use strict';

const _swap = (items, indexA, indexB) => {
  const helper = items[indexA];
  items[indexA] = items[indexB];
  items[indexB] = helper;
};

const _partition = (items, leftIndex, rightIndex) => {
  const pivotIndex = rightIndex;
  let lessThan = leftIndex + 1;
  let index = leftIndex;
  let greaterThan = rightIndex;

  while(lessThan <= greaterThan) {
    if(items[lessThan] <= items[pivotIndex]) {
      console.log('less')
      _swap(items, lessThan, index);
      index++;
      lessThan++;
    }
    else if(items[greaterThan] >= items[pivotIndex]) {
      console.log('greater')
      _swap(items, greaterThan, index);
      index++;
      greaterThan--;
    }
    _swap(items, pivotIndex, index);
    return pivotIndex;
  }
};

const _helper = (items, leftIndex, rightIndex) => {
  if (rightIndex >= leftIndex) {
    const partitionIndex = _partition(items, leftIndex, rightIndex);

    _helper(items,leftIndex, partitionIndex - 1);
    _helper(items, partitionIndex + 1, rightIndex);
  }
};

const quicksort = items => {
  return _helper(items, 0, items.length -1);
};

let array = [4,5,3,1];

quicksort(array);
console.log(array);