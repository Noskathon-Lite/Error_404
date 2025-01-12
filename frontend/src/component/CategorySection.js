import React from 'react';
import { ResourceCard } from './ResourceCard';
export function CategorySection({ title, description, resources, icon: Icon }) {
  return (
    <section className="mb-16 scroll-mt-16" id={title.toLowerCase().replace(/\s+/g, '-')}>
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-blue-50 rounded-full">
          <Icon className="h-6 w-6 text-blue-600" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
          <p className="text-gray-600 mt-1">{description}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {resources.map((resource) => (
          <ResourceCard key={resource.id} resource={resource} />
        ))}
      </div>
    </section>
  );
}