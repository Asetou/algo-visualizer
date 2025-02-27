# Bubble Sort

This code defines a TypeScript type called `SortingStep` which represents a single step in the bubble sort algorithm visualization. Let me break down each property in detail:

### SortingStep Properties

1. **`array: number[]`**
   - This is a snapshot of the entire array at this particular step in the sorting process
   - It contains all the values in the array at this moment in time
   - Each time a swap happens, this array will be updated to show the new state

2. **`comparing: number[] | null`**
   - An array containing the indices of elements currently being compared, or `null` if no comparison is happening
   - Typically contains exactly two indices (like `[3, 4]`) representing the positions of elements being compared
   - Used to highlight these elements in the visualization (usually in yellow)
   - Can be `null` when no comparison is actively happening (like after a swap is complete)

3. **`swapping: number[] | null`**
   - An array containing the indices of elements currently being swapped, or `null` if no swap is happening
   - Like `comparing`, it typically contains two indices
   - Used to highlight elements in the visualization (usually in red) when they're being swapped
   - Will be `null` during comparison steps or when no swap is needed

4. **`sorted: number[]`**
   - An array containing the indices of elements that are already in their final sorted positions
   - In bubble sort, after each pass, the largest unsorted element "bubbles" to its correct position
   - These elements are typically highlighted in green in the visualization
   - The array grows over time as more elements reach their final positions

5. **`message: string`**
   - A human-readable explanation of what's happening at this step
   - Describes the comparison or swap operation in plain language
   - Used in the explanation panel to help users understand the algorithm
   - Examples: "Comparing elements at indices 3 and 4" or "Swapping 8 and 5"

### How It's Used in the Visualization Flow

1. For each step of the algorithm, a new `SortingStep` object is created
2. All steps are collected in an array (`steps` in the `useBubbleSort` hook)
3. The visualization moves through these steps one by one (forwards or backwards)
4. At each step, the UI components use these properties to:
   - Display the array values (from `array`)
   - Highlight elements being compared (from `comparing`)
   - Highlight elements being swapped (from `swapping`)
   - Highlight sorted elements (from `sorted`)
   - Show explanatory text (from `message`)

This type definition is essential for tracking and representing the algorithm's state at each step, allowing the visualization to accurately show what's happening internally as bubble sort progresses.


This section defines the state variables used in the `useBubbleSort` React hook. Let me explain each one in detail:

### State Variables

1. **`const [array, setArray] = useState<number[]>(initialArray)`**
   - **Purpose**: Stores the current array that will be sorted
   - **Type**: An array of numbers (`number[]`)
   - **Initial Value**: Takes `initialArray` parameter passed to the hook (defaults to empty array if none provided)
   - **Usage**: This is the base array that the algorithm will sort. When a user clicks "Generate New Array," this state is updated with new random values.

2. **`const [steps, setSteps] = useState<SortingStep[]>([])`**
   - **Purpose**: Stores all the individual steps of the sorting algorithm
   - **Type**: An array of `SortingStep` objects (the type we just discussed)
   - **Initial Value**: Empty array `[]`
   - **Usage**: When the sort begins, this array is populated with all steps from start to finish. Think of it as a complete timeline of the sorting process.

3. **`const [currentStep, setCurrentStep] = useState<number>(-1)`**
   - **Purpose**: Tracks which step in the `steps` array is currently being displayed
   - **Type**: Number
   - **Initial Value**: `-1` (indicating no step is active yet)
   - **Usage**: As the user moves through the visualization (using next/previous buttons or auto-play), this value changes to point to the current position in the steps array.

4. **`const [isPlaying, setIsPlaying] = useState<boolean>(false)`**
   - **Purpose**: Tracks whether the animation is currently auto-playing
   - **Type**: Boolean
   - **Initial Value**: `false` (not playing initially)
   - **Usage**: Controls whether the visualization automatically advances to the next step. When the user presses play or pause, this state toggles.

5. **`const [speed, setSpeed] = useState<number>(500)`**
   - **Purpose**: Controls the speed of the animation
   - **Type**: Number (milliseconds)
   - **Initial Value**: `500` (half a second between steps)
   - **Usage**: Determines the delay between steps when auto-playing. Lower values make the animation faster, higher values make it slower.

6. **`const [isComplete, setIsComplete] = useState<boolean>(false)`**
   - **Purpose**: Indicates if the sorting process has completed
   - **Type**: Boolean
   - **Initial Value**: `false`
   - **Usage**: Used to show completion status and potentially enable/disable certain UI controls. Gets set to `true` when the visualization reaches the final step.

7. **`const timerRef = useRef<NodeJS.Timeout | null>(null)`**
   - **Purpose**: Holds a reference to the setTimeout timer used for auto-playing
   - **Type**: `NodeJS.Timeout | null` (either a timer ID or null)
   - **Initial Value**: `null`
   - **Usage**: This isn't a state variable (it's a ref), but it's crucial for managing the animation. It allows the component to clear the timer when needed (like when pausing or unmounting) to prevent memory leaks.

### How These Variables Work Together

1. When the component mounts, it initializes with an empty or provided array
2. When sorting begins (`runSort` function is called):
   - All steps are calculated and stored in `steps`
   - `currentStep` is set to 0 (first step)
3. During auto-play:
   - `isPlaying` is set to true
   - A timer (stored in `timerRef`) increments `currentStep` at intervals determined by `speed`
4. The UI components (like `ArrayBars`) use data from `steps[currentStep]` to render the visualization
5. User controls (play, pause, step forward/back) manipulate `currentStep` and `isPlaying`
6. When reaching the last step, `isComplete` is set to true and auto-play stops

This state management approach allows for a completely interactive visualization where users can:
- Play through the entire animation
- Pause at any point
- Step forward or backward manually
- Adjust the speed
- Reset and start over

It's a powerful pattern for algorithm visualizations that provides both automated playback and manual exploration.