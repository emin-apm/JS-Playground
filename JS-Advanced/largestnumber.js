function largestNumb(arr1, arr2, arr3) {
  let largest = 0;
  if (arr1 > arr2 && arr1 > arr3) {
    largest = arr1;
  } else if (arr2 > arr1 && arr2 > arr3) {
    largest = arr2;
  } else {
    largest = arr3;
  }
  console.log(largest);
}
largestNumb(-15, 2, 3);
