import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl py-12">
      {/* Hero section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent py-2 leading-tight">
          About Algorithm Visualizer
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          A journey to make complex algorithms and data structures intuitive and accessible through interactive visualizations.
        </p>
      </div>

      {/* Personal story section */}
      <div className="mb-20">
        <div className="flex flex-col md:flex-row items-center gap-10 mb-12">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Why build this?</h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                Creating a tool to visually explain algorithms and data structures has been something 
                I've always wanted to do. Throughout my journey learning computer science, I found that 
                visualizing these concepts made them significantly easier to understand - yet good 
                visualizations were often hard to find.
              </p>
              <p>
                This project represents the intersection of my passion for teaching, my interest in 
                algorithms, and my desire to create tools that help others learn. Seeing complex 
                concepts come to life through animation provides an intuitive understanding that text 
                explanations alone simply cannot achieve.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl shadow-sm">
            <div className="aspect-video relative overflow-hidden rounded-lg bg-indigo-100 flex items-center justify-center">
              <div className="text-6xl text-indigo-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-24 h-24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 1-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21a48.25 48.25 0 0 1-8.135-.687c-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Ongoing journey section */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-10 mb-20">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Work-in-progess</h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                This Algorithm Visualizer is still an ongoing project. I continue to add new 
                algorithms, refine the visualizations, and improve the user experience. Currently, 
                the project includes visualizations for common sorting and searching algorithms, 
                but I plan to expand to graph algorithms, dynamic programming techniques, and more 
                complex data structures.
              </p>
              <p>
                As I learn and grow as a developer, so too will this project. Each new feature 
                represents not just an addition to the tool, but also a deeper understanding of 
                the algorithms themselves and better techniques for visualizing them.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl shadow-sm">
            <div className="aspect-video relative overflow-hidden rounded-lg bg-indigo-100 flex items-center justify-center">
              <div className="text-6xl text-indigo-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-24 h-24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Built to help section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Built to Help Others</h2>
          <div className="prose prose-lg max-w-4xl mx-auto text-gray-600">
            <p>
              The primary goal of this project is to help both myself and others better understand 
              algorithms and data structures. These concepts form the foundation of computer science, 
              yet they can be challenging to grasp without proper visualization.
            </p>
            <p>
              Whether you're a student learning these concepts for the first time, a developer 
              brushing up on fundamentals, or someone preparing for technical interviews, I hope 
              this tool provides clarity and insight. The step-by-step visualizations are designed 
              to make abstract concepts concrete and accessible.
            </p>
            <p>
              I believe that learning is most effective when it's interactive and visual. By seeing 
              exactly how algorithms work - watching elements being compared, swapped, and arranged - 
              you can develop an intuitive feel for their behavior and efficiency.
            </p>
          </div>
        </div>

        {/* Stats/features section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl text-center">
            <div className="text-4xl text-blue-600 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 mx-auto mb-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">Sorting Algorithms</h3>
            <p className="text-gray-600">Interactive visualizations of bubble sort, merge sort, quick sort and more.</p>
          </div>
          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-xl text-center">
            <div className="text-4xl text-indigo-600 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 mx-auto mb-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">Searching Algorithms</h3>
            <p className="text-gray-600">Step by step visualizations of binary search and other searching techniques.</p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl text-center">
            <div className="text-4xl text-purple-600 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 mx-auto mb-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">Educational Content</h3>
            <p className="text-gray-600">Clear explanations, time complexity information, and practical applications.</p>
          </div>
        </div>

        {/* Technical section */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-10 rounded-xl mb-20">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">How did you build it?</h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              This project is built using Next.js, React, and TypeScript, with Tailwind CSS and 
              shadcn/ui for styling. The modular design allows for easy addition of new algorithms 
              and visualizations.
            </p>
            <p>
              Each algorithm is implemented with a custom React hook that handles the state management 
              and step generation. The visualizations use custom components to render the current state 
              of the algorithm, with animations to show transitions between steps.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3 mt-6">
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">Next.js</span>
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">React</span>
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">TypeScript</span>
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">Tailwind CSS</span>
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">Shadcn UI</span>
          </div>
        </div>

      </div>
    </div>
  );
}