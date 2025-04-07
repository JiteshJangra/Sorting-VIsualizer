const selectionSort = async (
  array,
  speedRef,
  nums,
  active,
  active1,sorting,
  setNums,
  setActive,
  setActive1,
  cancelSorting
) => {
  let arr = [...array];

  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    if (cancelSorting.current) return;
    let minIndex = i;

    setActive(i);
    for (let j = i + 1; j < n; j++) {
      if (cancelSorting.current) return;

      setActive1(j);
      await new Promise((resolve) =>
        setTimeout(resolve, 300 - speedRef.current)
      );
      // console.log( j)
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
        // setActive(j);
      }
    }

    setActive(minIndex); 
    await new Promise((resolve) => setTimeout(resolve, 350 - speedRef.current));
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      setNums([...arr]);
      await new Promise((resolve) =>
        setTimeout(resolve, 300 - speedRef.current)
      );
    }
  }

};

export default selectionSort;
