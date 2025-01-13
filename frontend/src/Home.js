import React, { useEffect, useState } from "react";
import AllLink from "./component/AllLink";
import { Link } from "react-router-dom";
import Layout from './Layout'
import Header, { MoodeEntriesHistoryContext } from "./component/Header";
import MoodEntryHistory from "./component/MoodEntyHistory";
// Helper function to format dates
export const formatDate = (date) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  console.log({ date });
  return new Date(date).toLocaleDateString("en-US", options);
};

export const moodOptions = [
  {
    emoji: "😊",
    label: "Happy",
    value: 1,
    suggestions: [
      "Go for a walk",
      "Share your joy with friends",
      "Try something new",
    ],
  },
  {
    emoji: "😐",
    label: "Neutral",
    value: 2,
    suggestions: [
      "Take a short break",
      "Do some light exercise",
      "Listen to music",
    ],
  },
  {
    emoji: "😢",
    label: "Sad",
    value: 3,
    suggestions: [
      "Talk to someone you trust",
      "Practice self-care",
      "Try deep breathing",
    ],
  },
  {
    emoji: "😡",
    label: "Angry",
    value: 4,
    suggestions: ["Take deep breaths", "Exercise", "Write your feelings down"],
  },
  {
    emoji: "😴",
    label: "Tired",
    value: 5,
    suggestions: [
      "Take a power nap",
      "Have a healthy snack",
      "Get some fresh air",
    ],
  },
];

export default function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const [note, setNote] = useState("");
  const [averageMood, setAverageMood] = useState(0);
  const [moodEntries, setMoodEntries] = useState(() => {
    const saved = localStorage.getItem("moodEntries");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return [];
      }
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("moodEntries", JSON.stringify(moodEntries));
    calculateAverageMood();
  }, [moodEntries]);

  const calculateAverageMood = () => {
    if (moodEntries.length === 0) {
      setAverageMood(0);
      return;
    }
    const moodValues = moodEntries.map(
      (entry) =>
        moodOptions.find((option) => option.emoji === entry.mood)?.value || 3
    );
    const avg = moodValues.reduce((a, b) => a + b, 0) / moodValues.length;
    setAverageMood(avg);
  };

  return (
    <MoodeEntriesHistoryContext.Provider
      value={{ setMoodEntries, moodEntries, averageMood }}
    >
      <Layout>
      <div className="absolute inset-0 bg-white/40 backdrop-blur-sm -z-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center py-16 md:py-24">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            "Resources for Every Mood, Support for Every Mind."
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join our supportive community in sharing and accessing valuable
            mental health resources, experiences, and knowledge.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-colors flex items-center">
              Browse Resources <span className="ml-2">→</span>
            </button>
            <button className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-full hover:bg-purple-50 transition-colors">
              Contribute
            </button>
          </div>
        </div>
        <div className="max-w-3xl mx-auto mb-16">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for resources, topics, or experiences..."
              className="w-full px-6 py-4 rounded-full border-2 border-purple-100 focus:border-purple-300 focus:outline-none shadow-sm"
            />
            <span className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-400">
              🔍
            </span>
          </div>
        </div>

        <MoodEntryHistory />

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <AllLink />
        </div>
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Popular Topics
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Anxiety",
              "Depression",
              "Self-Care",
              "Mindfulness",
              "Stress Management",
              "Relationships",
              "Work-Life Balance",
              "Personal Growth",
            ].map((topic) => (
              <a
                key={topic}
                href="#"
                className="bg-white px-6 py-4 rounded-xl text-center border border-purple-100 hover:border-purple-300 hover:shadow-sm transition-all"
              >
                {topic}
              </a>
            ))}
          </div>
        </div>
      </div>
      </Layout>
     
    </MoodeEntriesHistoryContext.Provider>
  );
}
