import React from "react";

const mergeSort = async (
  arr,
  left,
  right,
  speedRef,
  setNums,
  setActive,
  setActive1,
  cancelSorting
) => {
  if (cancelSorting.current || right <= left) return;

  const mid = Math.floor((right + left) / 2);
  await mergeSort(
    arr,
    left,
    mid,
    speedRef,
    setNums,
    setActive,
    setActive1,
    cancelSorting
  ); // Sort left half
  await mergeSort(
    arr,
    mid + 1,
    right,
    speedRef,
    setNums,
    setActive,
    setActive1,
    cancelSorting
  ); // Sort right half

  await merge(
    arr,
    left,
    mid,
    right,
    speedRef,
    setNums,
    setActive,
    setActive1,
    cancelSorting
  );
};

const merge = async (
  arr,
  left,
  mid,
  right,
  speedRef,
  setNums,
  setActive,
  setActive1,
  cancelSorting
) => {
  let i = left,
    j = mid + 1;

  while (i <= mid && j <= right) {
    //setActive(setActive1,[i, j]);
    //   await new Promise((resolve) => setTimeout(resolve, speed));
    if (cancelSorting.current) return;
    if (arr[i] < arr[j]) {
      //sortedArr.push(arr[i]);
      i++;
    } else {
      let temp = arr[j];
      let k = j;

      // Shift elements to the right
      while (k > i) {
        arr[k] = arr[k - 1];
        k--;
      }
      arr[i] = temp;
      i++;
      mid++;
      j++;
      if (cancelSorting.current) return;

      setActive1(j);
      setActive(i);
      setNums([...arr]);
      await new Promise((resolve) => setTimeout(resolve, 300 - speedRef.current)); // Pause for animation
    }

    //   while (i <= mid) sortedArr.push(arr[i++]);
    //   while (j <= right) sortedArr.push(arr[j++]);

    //   for (let k = left, t = 0; k <= right; k++, t++) {
    //     if (cancelSorting.current) return;
    //     arr[k] = sortedArr[t];
  }
};

export default mergeSort;
