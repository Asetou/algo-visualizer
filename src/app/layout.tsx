import './globals.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Algorithm Visualizer',
  description: 'Interactive visualizations of algorithms and data structures',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="border-b">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex h-16 items-center justify-between">
            <Link href="/" className="font-bold text-xl">
              Algorithm Visualizer
            </Link>
            <nav className="flex items-center gap-6">
              <Link href="/algorithms/sorting" className="text-sm font-medium hover:underline">
                Sorting
              </Link>
              <Link href="/algorithms/searching" className="text-sm font-medium hover:underline">
                Searching
              </Link>
              <Link href="/algorithms/graph" className="text-sm font-medium hover:underline">
                Graph
              </Link>
              <Link href="/data-structures" className="text-sm font-medium hover:underline">
                Data Structures
              </Link>
            </nav>
          </div>
        </header>
        <main className="min-h-screen">{children}</main>
        <footer className="border-t py-6 md:py-0">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Panya Ou. Algorithm Visualizer
            </p>
            <div className="flex items-center gap-4">
              <Link href="/about" className="text-sm text-muted-foreground hover:underline">
                About
              </Link>
              <Link href="https://github.com/Asetou/algo-visualizer" className="text-sm text-muted-foreground hover:underline">
                GitHub
              </Link>
              <Link href="https://panou.dev/" className="text-sm text-muted-foreground hover:underline">
                Website
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}