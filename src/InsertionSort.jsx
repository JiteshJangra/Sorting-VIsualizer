const InsertionSort = async (
  array,
  speedRef,
  setNums,
  setActive,
  setActive1,
  cancelSorting
) => {
  let arr = [...array];

  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    setActive(i);
    while (j >= 0 && arr[j] > key) {
      if (cancelSorting.current) return;
      arr[j + 1] = arr[j];
      j--;
      if( j>=0)
      setActive1(j);
      setNums([...arr]);
      await new Promise((resolve) => setTimeout(resolve, 300 - speedRef.current));
    }

    arr[j + 1] = key;

    setNums([...arr]);
    await new Promise((resolve) => setTimeout(resolve, 300 - speedRef.current));
  }
};

export default InsertionSort;
