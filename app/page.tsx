"use client";

import { useState } from "react";
import { categories, Category, Product } from "./data/categories";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<Category>(categories[0]);

  return (
    <div className="container mx-auto py-6 px-2 sm:px-8 lg:px-12">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
        {/* Sidebar */}
        <aside className="w-full lg:w-80 flex-shrink-0">
          <div className="bg-white border rounded-2xl shadow-md p-6 sticky top-6">
            <h2 className="text-2xl font-extrabold mb-6">Categories</h2>
            <div className="space-y-2 max-h-[calc(100vh-8rem)] overflow-y-auto">
              {categories.map((category: Category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category)}
                  className={cn(
                    "w-full cursor-pointer text-left px-4 py-3 rounded-lg transition-colors text-lg font-semibold border",
                    selectedCategory.name === category.name
                      ? "bg-primary text-white font-bold border-primary"
                      : "text-gray-700 hover:bg-muted border-transparent"
                  )}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Table */}
        <main className="flex-1">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-6">{selectedCategory.name}</h1>
          <div className="rounded-2xl border bg-white shadow-md overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50%] text-lg text-gray-900 font-bold">Name</TableHead>
                  <TableHead className="text-right text-lg text-gray-900 font-bold">Products</TableHead>
                  <TableHead className="text-right text-lg text-gray-900 font-bold">Reviews</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {selectedCategory.items.map((item: Product, idx) => (
                  <TableRow
                    key={item.name}
                    className={cn(
                      idx % 2 === 0 ? "bg-muted/50" : "",
                      "hover:bg-primary/10 transition"
                    )}
                  >
                    <TableCell className="font-semibold text-base text-gray-900 truncate max-w-[260px] sm:max-w-none flex items-center gap-2">
                      {item.name}
                      <a
                        href={`https://www.google.com/search?q=${encodeURIComponent(item.name)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-1 inline-flex items-center"
                        title={`Search "${item.name}" on Google`}
                      >
                        {/* Google SVG icon */}
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 48 48"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="hover:scale-110 transition-transform"
                        >
                          <g>
                            <path fill="#4285F4" d="M43.6 20.5H42V20.5H24V27.5H35.1C33.6 31.4 29.1 34 24 34C17.4 34 12 28.6 12 22C12 15.4 17.4 10 24 10C27 10 29.7 11.1 31.8 13L36.7 8.1C33.3 5.1 28.9 3 24 3C12.9 3 4 11.9 4 23C4 34.1 12.9 43 24 43C34.6 43 43 34.6 43 24C43 22.7 42.9 21.6 42.6 20.5Z"/>
                            <path fill="#34A853" d="M6.7 14.1L12.9 18.7C14.9 14.3 19.1 11 24 11C27 11 29.7 12.1 31.8 14L36.7 9.1C33.3 6.1 28.9 4 24 4C16.1 4 9.1 9.6 6.7 14.1Z"/>
                            <path fill="#FBBC05" d="M24 44C29.1 44 33.6 41.4 36.1 37.5L29.5 32.6C28.1 33.4 26.2 34 24 34C19.1 34 14.9 30.7 12.9 26.3L6.7 30.9C9.1 35.4 16.1 44 24 44Z"/>
                            <path fill="#EA4335" d="M43.6 20.5H42V20.5H24V27.5H35.1C34.3 29.6 32.7 31.4 30.5 32.6L36.1 37.5C39.2 34.1 41 29.6 41 24C41 22.7 40.9 21.6 40.6 20.5Z"/>
                          </g>
                        </svg>
                      </a>
                    </TableCell>
                    <TableCell className="text-right tabular-nums text-base text-gray-900">{item.products}</TableCell>
                    <TableCell className="text-right tabular-nums text-base text-gray-900">{item.reviews}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </main>
      </div>
    </div>
  );
}
