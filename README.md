# Algorithm Visualizer

An algorithm visualization project using **React**, **Next.js**, **Tailwind**, and **ShadCN UI**.

## 📁 Project Structure

```
src/
  ├── components/
  │   ├── ui/                     # ShadCN UI components
  │   │   ├── button.tsx
  │   │   ├── card.tsx
  │   │   └── ...
  │   ├── visualizations/         # Custom visualization components
  │   │   ├── sorting/
  │   │   │   ├── array-bars.tsx  # Visual representation of arrays
  │   │   │   └── controls.tsx    # Play/pause/step controls
  │   │   ├── trees/
  │   │   │   └── tree-node.tsx   # Visual tree nodes
  │   │   └── ...
  │   └── layout/
  │       └── visualization-layout.tsx  # Common layout for all visualizations
  ├── lib/
  │   ├── utils.ts                # Utility functions
  │   └── animation.ts            # Animation utilities
  ├── hooks/
  │   ├── use-algorithm.ts        # Hook for algorithm states
  │   └── use-visualization.ts    # Hook for visualization controls
  ├── algorithms/                 # Algorithm implementations
  │   ├── sorting/
  │   │   ├── bubble-sort.ts
  │   │   └── ...
  │   └── ...
  ├── data-structures/            # Data structure implementations
  │   ├── linked-list.ts
  │   └── ...
  └── app/
      ├── page.tsx                # Home page
      ├── algorithms/
      │   ├── sorting/page.tsx    # Sorting visualization page
      │   └── ...
      └── data-structures/
          ├── trees/page.tsx
          └── ...
```

## 🚀 Features
- 📊 **Sorting Algorithms**: Visualize Bubble Sort, Quick Sort, Merge Sort, and more.
- 🌲 **Data Structures**: Explore trees, linked lists, and graph structures.
- 🎨 **ShadCN UI Components**: Clean and modern UI components.
- 🎬 **Interactive Animations**: Step through algorithms with play/pause controls.
- 🔄 **Custom Hooks**: Manage algorithm state and visualization controls effectively.

## 🛠️ Installation

Clone the repository and install dependencies:

```sh
git clone https://github.com/your-username/algorithm-visualizer.git
cd algorithm-visualizer
npm install
```

## 📌 Usage

Start the development server:

```sh
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

