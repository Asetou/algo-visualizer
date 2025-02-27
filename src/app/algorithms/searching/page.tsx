import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Search, Share2 } from 'lucide-react';

export default function SearchingAlgorithmsPage() {
  const algorithms = [
    {
      title: "Binary Search",
      description: "An efficient algorithm for finding an item in a sorted list",
      icon: <Search className="h-8 w-8" />,
      path: "/algorithms/searching/binary-search",
      complexity: "O(log n)",
      color: "bg-blue-100 text-blue-800"
    },
    {
      title: "Linear Search",
      description: "A simple search algorithm that checks each element sequentially",
      icon: <Share2 className="h-8 w-8" />,
      path: "/algorithms/searching/linear-search",
      complexity: "O(n)",
      color: "bg-green-100 text-green-800"
    },
    // Add more algorithms as you implement them
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
          Searching Algorithms
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Interactive visualizations of different searching techniques
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
                <div className="text-sm">
                  <span className="font-medium">Time Complexity:</span> {algorithm.complexity}
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