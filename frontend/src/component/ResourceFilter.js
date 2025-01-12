import React from 'react';
import { ExternalLink } from 'lucide-react';
export function ResourceCard({ resource }) {
  return (
    <div className="group p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-blue-100 transition-all duration-300 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/0 to-blue-50/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
      <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
        {resource.title}
      </h3>
      <p className="text-gray-600 mb-4 line-clamp-2">
        {resource.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {resource.tags.map((tag) => (
          <span 
            key={tag}
            className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
      <a
        href={resource.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
      >
        Visit Resource
        <ExternalLink className="ml-2 h-4 w-4 transform group-hover:translate-x-0.5 transition-transform" />
      </a>
    </div>
  );
}