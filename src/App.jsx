import { useEffect, useRef, useState } from "react";
import Bars from "./Bars";
import mergeSort from "./MergeSort";
import bubbleSort from "./BubleSort";
import quickSort from "./QuickSort";
import InsertionSort from "./InsertionSort";
import selectionSort from "./SelectionSort";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

function App() {
  const [length, setLength] = useState(50);
  const [algorithm, setAlgorithm] = useState("merge");

  const [speed, setSpeed] = useState(10);
  const [sorting, setSorting] = useState(false);
  const [nums, setNums] = useState([]);
  const [active, setActive] = useState(null);
  const [active1, setActive1] = useState(null);
  const cancelSorting = useRef(false);
  const speedRef = useRef(10);

  const generateRandomArray = (length, min = 10, max = 1000) => {
    return Array.from(
      { length },
      () => Math.floor(Math.random() * (max - min + 1)) + min
    );
  };

  // Example usage:

  const handleSort = async () => {
    if (sorting) return;
    setSorting(true);
    cancelSorting.current = false;
    let arr = [...nums];
    if (algorithm == "merge")
      await mergeSort(
        arr,
        0,
        arr.length - 1,
        speedRef,
        setNums,
        setActive,
        setActive1,
        cancelSorting
      );
    else if (algorithm == "bubble")
      await bubbleSort(
        arr,
        speedRef,
        setNums,
        setActive,
        setActive1,
        cancelSorting
      );
    else if (algorithm == "quick")
      await quickSort(
        arr,
        0,
        arr.length - 1,
        speedRef,
        setNums,
        setActive,
        setActive1,
        cancelSorting
      );
    else if (algorithm == "Insertion")
      await InsertionSort(
        arr,
        speedRef,
        setNums,
        setActive,
        setActive1,
        cancelSorting
      );
    else if (algorithm == "Selection")
      await selectionSort(
        arr,
        speedRef,
        nums,
        active,
        active1,
        sorting,
        setNums,
        setActive,
        setActive1,
        cancelSorting
      );
    setSorting(false);
  };

  const [timeoutId, setTimeoutId] = useState(null);

  const generateArray = (time) => {
    if (timeoutId) clearTimeout(timeoutId);

    setSorting(false);

    const interval = setTimeout(() => {
      cancelSorting.current = true;
      setActive(null);
      const newArray = generateRandomArray(length);
      setNums(newArray);
    }, time);

    setTimeoutId(interval);
  };

  const randomise = () => {
    setSorting(false);
    cancelSorting.current = true;
    const arr = [...nums];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
    }
    setNums(arr);
  };

  useEffect(() => {
    generateArray(500); // Generate an array on mount
  }, [length]);

  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-col lg:flex-row p-3 justify-center items-center">
        <h3 className="text-2xl font-bold mx-10">Sort visualizer</h3>
        <div className="flex flex-col md:flex-row lg:flex-row ">
          <div className="flex lg:flex-row flex-col gap-y-2 gap-x-8">
            <div className="flex flex-col gap-2">
              <label htmlFor="alg">Algorithm</label>
              <select
                type="text"
                id="alg"
                className="border-4 rounded w-40 rounded-lg"
                value={algorithm}
                onChange={(e) => setAlgorithm(e.target.value)}
                placeholder="Sorting Algorithm"
              >
                <option value="merge" className="hover:bg-blue-500">
                  Merge
                </option>
                <option value="quick">Quick</option>
                <option value="bubble">Bubble</option>
                <option value="Insertion">Insertion</option>
                <option value="Selection">Selection</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="w-50"># elements ({length})</label>
              <input
                type="range"
                min="10"
                max="1000"
                step="10"
                className="border-5 border-red-100 rounded accent-black"
                value={length}
                onChange={(e) => {
                  let val = e.target.value;
                  setLength(val);
                }}
              ></input>
            </div>

            <div className="flex flex-col gap-2">
              <label className="">Speed ({speed}x) :</label>

              <input
                type="range"
                min="0"
                max="300"
                step="10"
                className="accent-black border-2 border-pink-300 rounded"
                value={speed}
                onChange={(e) => {
                  speedRef.current = Number(e.target.value);
                  setSpeed(Number(e.target.value));
                }}
              ></input>
            </div>
          </div>

          <div className="flex lg:flex-row gap-2 lflex-col justify-center items-center p-4">
            {!sorting && (
              <button
                className={`border-2 px-4 py-2 border-gray-30 rounded-xl  ${
                  !sorting ? "bg-black text-white" : "bg-green-700 text-white"
                }`}
                onClick={() => {
                  handleSort();
                }}
              >
                Sort
              </button>
            )}
            {sorting && (
              <button
                className={`border-2 px-4 py-2 border-gray-30 rounded-xl text-white  ${
                  !sorting ? "bg-gray-300" : "bg-red-700"
                }`}
                onClick={() => {
                  {
                    cancelSorting.current = true;
                  }
                }}
              >
                Stop
              </button>
            )}

            <button
              disabled={sorting}
              className={`border-2 w-30 px-4 py-2 border-gray-30  bg-gray-50 rounded-xl ${
                sorting ? " text-gray-400" : "hover:bg-red-700 hover:text-white"
              }`}
              onClick={() => {
                randomise();
              }}
            >
              {"Randomise"}
            </button>
          </div>
        </div>
      </div>

      <Bars nums={nums} active={active} active1={active1} sorting={sorting} />
      <SpeedInsights />
      <Analytics/>
    </div>
  );
}

export default App;
