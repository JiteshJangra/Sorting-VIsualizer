const bubbleSort = async (
  array,
  speedRef,
  setNums,
  setActive,
  setActive1,
  cancelSorting
) => {
  let arr = [...array];
  let len = arr.length;
  for (let i = 0; i < len - 1; i++) {
      for (let j = 0; j < len - i - 1; j++) {
          if (cancelSorting.current) return;
      if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          setActive(j+1);
          setActive1(j);
        setNums([...arr]);
        await new Promise((resolve) => setTimeout(resolve, 300-speedRef.current));
      }
    }
  }
};

export default bubbleSort;