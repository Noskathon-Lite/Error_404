import React from 'react';
import { Search } from 'lucide-react';
export function SearchBar({ onSearch }) {
  return (
    <div className="relative w-full max-w-xl mx-auto group">
      <div className="absolute inset-0 bg-blue-200 opacity-0 group-hover:opacity-10 rounded-lg transition-opacity" />
      <input
        type="text"
        placeholder="Search resources..."
        onChange={(e) => onSearch(e.target.value)}
        className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm text-lg transition-all"
        aria-label="Search resources"
      />
      <Search className="absolute left-4 top-3.5 h-6 w-6 text-gray-400 group-hover:text-blue-500 transition-colors" />
    </div>
  );
} 