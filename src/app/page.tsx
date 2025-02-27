import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, GitBranch, LineChart, List, Network, Share2, BarChart2 } from 'lucide-react';

export default function Home() {
  const categories = [
    {
      title: "Sorting Algorithms",
      description: "Visualize and compare different sorting techniques",
      icon: <List className="h-8 w-8" />,
      path: "/algorithms/sorting",
      algorithms: ["Bubble Sort", "Merge Sort", "Quick Sort", "Heap Sort"],
      color: "bg-blue-100 text-blue-800",
    },
    {
      title: "Searching Algorithms",
      description: "Explore various searching strategies",
      icon: <Share2 className="h-8 w-8" />,
      path: "/algorithms/searching",
      algorithms: ["Binary Search", "Linear Search", "Depth-First Search", "Breadth-First Search"],
      color: "bg-green-100 text-green-800",
    },
    {
      title: "Graph Algorithms",
      description: "Visualize graph traversal and pathfinding",
      icon: <Network className="h-8 w-8" />,
      path: "/algorithms/graph",
      algorithms: ["Dijkstra's Algorithm", "A* Search", "Bellman-Ford", "Floyd-Warshall"],
      color: "bg-purple-100 text-purple-800",
    },
    {
      title: "Tree Structures",
      description: "Explore different tree data structures",
      icon: <GitBranch className="h-8 w-8" />,
      path: "/data-structures/trees",
      algorithms: ["Binary Search Tree", "AVL Tree", "Red-Black Tree", "Heap"],
      color: "bg-amber-100 text-amber-800",
    },
    {
      title: "Dynamic Programming",
      description: "Visualize dynamic programming techniques",
      icon: <LineChart className="h-8 w-8" />,
      path: "/algorithms/dynamic-programming",
      algorithms: ["Fibonacci", "Knapsack Problem", "Longest Common Subsequence"],
      color: "bg-red-100 text-red-800",
    },
    {
      title: "Data Structures",
      description: "Explore fundamental data structures",
      icon: <BarChart2 className="h-8 w-8" />,
      path: "/data-structures",
      algorithms: ["Linked List", "Stack", "Queue", "Hash Table"],
      color: "bg-teal-100 text-teal-800",
    },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
          Algorithm Visualizer
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Interactive visualizations to help understand algorithms and data structures
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <Link href={category.path} key={index} className="transition-transform hover:scale-[1.02]">
            <Card className="h-full flex flex-col">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div className={`p-2 rounded-md ${category.color}`}>
                    {category.icon}
                  </div>
                </div>
                <CardTitle className="mt-4">{category.title}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {category.algorithms.map((algo, idx) => (
                    <Badge key={idx} variant="secondary">{algo}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="pt-2">
                <div className="flex items-center text-sm text-primary">
                  Explore{" "}
                  <ArrowRight className="h-4 w-4 ml-1" />
                </div>
              </CardFooter>
            </Card>
          </Link>
          
        ))}
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Why Visualize Algorithms?</h2>
        <p className="max-w-2xl mx-auto text-muted-foreground">
          Algorithm visualizations help deepen understanding by transforming abstract concepts into 
          interactive visual representations. This makes learning more engaging and intuitive.
        </p>
      </div>
    </div>
  );
}