# Sorting

## Mergesort

This implementation was improved by removing the need to create new concatenated sub-arrays.  Instead, two indexes track the location in the left and right side arrays.  Starting at 0 for both arrays, the value is checked to see which is less, and the result is pushed onto the output array and that array's index is incremented.  Once the index for one of the arrays goes beyond the number of elements in the array, the other index is looped and each value pushed to the output array until it is also beyond the number of elements, then the output array is returned.

## Quicksort

This implementation uses a pivot index and two tracking variables for less-than and greater-than positions.  While the less-than variable is less than the greater-than variable, a while loop checks each value and moves is based on if it is more or less than the value at the pivot.  Once the while loop completes a new partition is made and this repeats until the arrray is sorted.
