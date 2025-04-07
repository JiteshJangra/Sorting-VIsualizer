# Sorting Visualizer

Sorting Visualizer is a React-based web application that visually demonstrates various sorting algorithms. It allows users to select a sorting algorithm, adjust the speed and number of elements, and observe the sorting process in real-time.

## Live link : https://sort--visualizer.vercel.app/
## Features

- Visualize popular sorting algorithms:
  - Merge Sort
  - Quick Sort
  - Bubble Sort
  - Insertion Sort
  - Selection Sort
- Adjustable speed and number of elements.
- Randomize the array for a new sorting experience.
- Start, stop, and reset sorting at any time.

## Technologies Used

- **React**: For building the user interface.
- **Tailwind CSS**: For styling the application.
- **Vite**: For fast development and build setup.

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/sorting-visualizer.git
   cd sorting-visualizer
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open the application in your browser:
   ```
   http://localhost:5173
   ```

### Build for Production

To build the application for production:

```bash
npm run build
# or
yarn build
```

The production-ready files will be in the `dist` folder.

## Usage

1. Select a sorting algorithm from the dropdown menu.
2. Adjust the number of elements and speed using the sliders.
3. Click the "Sort" button to start the visualization.
4. Use the "Stop" button to halt the sorting process.
5. Click "Randomise" to shuffle the array.

## Project Structure

- `src/`: Contains all source files.
  - `App.jsx`: Main application component.
  - `Bars.jsx`: Component for rendering the bars representing the array.
  - Sorting algorithms: `MergeSort.jsx`, `QuickSort.jsx`, `BubbleSort.jsx`, `InsertionSort.jsx`, `SelectionSort.jsx`.
  - `index.css`: Tailwind CSS configuration.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments

- Inspired by various sorting visualizer projects.
- Built with React and Tailwind CSS for a modern and responsive UI.
