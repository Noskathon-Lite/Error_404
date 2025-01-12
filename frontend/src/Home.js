import React, { useEffect, useState } from "react";
import DisplayLink from "./DisplayLink";
// Helper function to format dates
const formatDate = (date) => {
  const options = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric'
  };
  return new Date(date).toLocaleDateString('en-US', options);
};

const moodOptions = [
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
  const [selectedMood, setSelectedMood] = useState(null);
  const [note, setNote] = useState("");
  const [averageMood, setAverageMood] = useState(0);

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
        moodOptions.find((option) => option.emoji === entry.mood)?.value || 3,
    );
    const avg = moodValues.reduce((a, b) => a + b, 0) / moodValues.length;
    setAverageMood(avg);
  };

  const handleMoodSubmit = () => {
    if (selectedMood) {
      const now = new Date();
      const timeOfDay = now.getHours() < 12 ? "morning" : "evening";
      const newEntry = {
        date: now.toISOString(),
        mood: selectedMood,
        note: note,
        timeOfDay,
      };
      setMoodEntries([newEntry, ...moodEntries]);
      setIsPopupOpen(false);
      setSelectedMood(null);
      setNote("");
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <header className="w-full bg-white/90 backdrop-blur-sm border-b border-purple-100 fixed top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-2xl">🧠</span>
              <span className="ml-2 text-2xl font-bold text-gray-800">
                MANASIK
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-600 hover:text-purple-600">
                Resources
              </a>
              <a href="#" className="text-gray-600 hover:text-purple-600">
                Community
              </a>
              <a href="#" className="text-gray-600 hover:text-purple-600">
                About
              </a>
              <a href="#" className="text-gray-600 hover:text-purple-600">
                Contact
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsPopupOpen(true)}
                className="flex items-center gap-2 border-2 border-purple-600 text-purple-600 px-4 py-2 rounded-full hover:bg-purple-50 transition-colors"
              >
                <span className="text-lg">➕</span>
                Track Mood
              </button>
              <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors">
                Join Us
              </button>
            </div>
          </div>
        </div>
      </header>
      <main className="pt-24 relative">
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
          <div className="max-w-3xl mx-auto mb-16">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-purple-100">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                  <span className="text-purple-600">📅</span>
                  Your Mood History
                </h2>
              </div>
              {moodEntries.length > 0 && (
                <div className="bg-purple-50 p-4 rounded-xl mb-6">
                  <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <span className="text-purple-600">📈</span>
                    Mood Insights
                  </h3>
                  <p className="text-gray-700 mb-2">
                    {averageMood >= 4
                      ? "You've been feeling great lately! Keep up the positive energy!"
                      : averageMood >= 3
                      ? "You've been maintaining a balanced mood. That's good!"
                      : averageMood >= 2
                      ? "Things have been a bit tough. Consider talking to someone or trying some new activities."
                      : "Your mood has been low. Please consider reaching out to a friend or professional for support."}
                  </p>
                </div>
              )}
              <div className="space-y-4">
                {moodEntries.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    <p>No mood entries yet. Start tracking your mood!</p>
                  </div>
                ) : (
                  moodEntries.map((entry, index) => (
                    <div
                      key={index}
                      className="bg-white border border-purple-100 p-4 rounded-xl hover:border-purple-200 transition-colors"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-sm text-gray-500">
                            {formatDate(new Date(entry.date))} - {entry.timeOfDay}
                          </p>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-2xl">{entry.mood}</span>
                            <p className="text-gray-700">{entry.note}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <DisplayLink 
              img="📚" 
              title="Curated Resources" 
              url="/resources" 
              text="Access quality mental health resources verified by our community." 
            />
            <DisplayLink 
              img="👥" 
              title=" Supportive Community" 
              url="/community" 
              text="Connect with others who understand and share your journey.." 
            />
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-purple-100">
              <span className="text-4xl text-purple-600 block mb-4">🔄</span>
              <h3 className="text-xl font-semibold mb-2">Share Experiences</h3>
              <p className="text-gray-600">
                Contribute your knowledge and experiences to help others.
              </p>
            </div>
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
      </main>
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-xl p-6 max-w-md w-full">
            <h2 className="text-xl font-semibold mb-4">How are you feeling?</h2>
            <div className="grid grid-cols-5 gap-2 mb-4">
              {moodOptions.map((option) => (
                <button
                  key={option.emoji}
                  onClick={() => setSelectedMood(option.emoji)}
                  className={`text-2xl p-2 rounded-lg hover:bg-purple-50 ${
                    selectedMood === option.emoji ? "bg-purple-100" : ""
                  }`}
                  aria-label={option.label}
                >
                  {option.emoji}
                </button>
              ))}
            </div>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Add a note about how you're feeling..."
              className="w-full p-2 border rounded-lg mb-4 h-24 focus:border-purple-300 focus:outline-none"
            />
            {selectedMood && (
              <div className="mb-4">
                <h3 className="font-medium mb-2">Suggestions:</h3>
                <ul className="list-disc list-inside text-gray-600">
                  {moodOptions
                    .find((option) => option.emoji === selectedMood)
                    ?.suggestions.map((suggestion, index) => (
                      <li key={index}>{suggestion}</li>
                    ))}
                </ul>
              </div>
            )}
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setIsPopupOpen(false)}
                className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleMoodSubmit}
                disabled={!selectedMood}
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
      <footer className="bg-gray-50 border-t border-purple-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <span className="text-2xl">🧠</span>
            <span className="ml-2 text-xl font-bold text-gray-800">
              MANASIK
            </span>
          </div>
          <p className="text-gray-600 max-w-md mx-auto">
            Together, we're building a supportive community for mental health
            resources and experiences.
          </p>
        </div>
      </footer>
    </div>
  );
}