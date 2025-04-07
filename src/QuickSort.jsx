const quickSort = async (
  arr,
  left,
  right,
  speedRef,
  setNums,
  setActive,
  setActive1,
  cancelSorting
) => {
  if (left < right) {
    if (cancelSorting.current) return;
    let pivotIndex = await partition(
      arr,
      left,
      right,
      speedRef,
      setNums,
      setActive,
      setActive1,
      cancelSorting
    );
    await quickSort(
      arr,
      left,
      pivotIndex - 1,
      speedRef,
      setNums,
      setActive,
      setActive1,
      cancelSorting
    );
    await quickSort(
      arr,
      pivotIndex + 1,
      right,
      speedRef,
      setNums,
      setActive,
      setActive1,
      cancelSorting
    );
  }
};

const partition = async (
  arr,
  left,
  right,
  speedRef,
  setNums,
  setActive,
  setActive1,
  cancelSorting
) => {
  if (cancelSorting.current) return;
  let pivot = arr[right];
  let i = left - 1;
  let j = left;
  setActive(right);
  
  while (j < right) {
    setActive1(j);
    if (cancelSorting.current) return;

    if (arr[j] <= pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
      setNums([...arr]);
      await new Promise((resolve) => setTimeout(resolve, 300-speedRef.current));
    }
    j++;
  }
  [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
  setNums([...arr]);
  await new Promise((resolve) => setTimeout(resolve, 300-speedRef.current));
  return i + 1;
};

export default quickSort;
