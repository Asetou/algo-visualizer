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


