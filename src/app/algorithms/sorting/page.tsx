import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, List, ArrowDownUp, ArrowUpDown, GitMerge, Menu } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function SortingAlgorithmsPage() {
  const algorithms = [
    {
      title: "Bubble Sort",
      description: "Simple comparison-based sorting algorithm",
      icon: <ArrowUpDown className="h-8 w-8" />,
      path: "/algorithms/sorting/bubble-sort",
      complexity: "O(n²)",
      color: "bg-blue-100 text-blue-800",
      tags: ["Elementary", "Comparison-based"]
    },
    {
      title: "Merge Sort",
      description: "Efficient, stable, divide-and-conquer algorithm",
      icon: <GitMerge className="h-8 w-8" />,
      path: "/algorithms/sorting/merge-sort",
      complexity: "O(n log n)",
      color: "bg-green-100 text-green-800",
      tags: ["Efficient", "Divide & Conquer"]
    },
    {
      title: "Quick Sort",
      description: "Fast divide-and-conquer algorithm with partitioning",
      icon: <ArrowDownUp className="h-8 w-8" />,
      path: "/algorithms/sorting/quick-sort",
      complexity: "O(n log n)",
      color: "bg-purple-100 text-purple-800",
      tags: ["Efficient", "Divide & Conquer"]
    },
    {
      title: "Insertion Sort",
      description: "Simple algorithm that builds sorted array one item at a time",
      icon: <List className="h-8 w-8" />,
      path: "/algorithms/sorting/insertion-sort",
      complexity: "O(n²)",
      color: "bg-amber-100 text-amber-800",
      tags: ["Elementary", "Online"]
    },
    {
      title: "Selection Sort",
      description: "Simple algorithm that selects smallest element in each pass",
      icon: <Menu className="h-8 w-8" />,
      path: "/algorithms/sorting/selection-sort",
      complexity: "O(n²)",
      color: "bg-red-100 text-red-800",
      tags: ["Elementary", "In-place"]
    },
    // Add more algorithms as you implement them
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
          Sorting Algorithms
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Interactive visualizations of different sorting techniques
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {algorithms.map((algorithm, index) => (
          <Link href={algorithm.path} key={index} className="transition-transform hover:scale-[1.02]">
            <Card className="h-full flex flex-col">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div className={`p-2 rounded-md ${algorithm.color}`}>
                    {algorithm.icon}
                  </div>
                </div>
                <CardTitle className="mt-4">{algorithm.title}</CardTitle>
                <CardDescription>{algorithm.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-col gap-2">
                  <div className="text-sm">
                    <span className="font-medium">Time Complexity:</span> {algorithm.complexity}
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {algorithm.tags.map((tag, idx) => (
                      <Badge key={idx} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-2">
                <div className="flex items-center text-sm text-primary">
                  Visualize{" "}
                  <ArrowRight className="h-4 w-4 ml-1" />
                </div>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}