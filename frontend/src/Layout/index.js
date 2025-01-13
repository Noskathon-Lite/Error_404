import React from "react";
import Header from "../component/Header";

export default function index({children}) {
  return (
    <div className="w-full flex flex-col min-h-screen h-full bg-gradient-to-b from-purple-50 to-white">
      <Header />
      <main className="pt-24 px-[40px] relative flex-1">
        {children}
      </main>
      <footer className="bg-gray-50 h-[100px] border-t mt-10 border-purple-100 py-[5px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-2">
            <span className="text-2xl">🧠</span>
            <span className="ml-2 text-xs font-bold text-gray-800">
              MANASIK
            </span>
          </div>
          <p className="text-gray-600 text-xs max-w-md mx-auto">
            Together, we're building a supportive community for mental health
            resources and experiences.
          </p>
        </div>
      </footer>
    </div>
  );
}
