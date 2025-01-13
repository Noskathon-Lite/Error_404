import React, { createContext, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { moodOptions } from "../Home";

const NavItem = [
  {
    name: "Resource",
    path: "/resource",
  },
  {
    name: "Community",
    path: "/coummunity",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

export const MoodeEntriesHistoryContext = createContext({
    moodEntries:[],
    setMoodEntries:()=>{}
})

export default function Header() {
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  const [selectedMood, setSelectedMood] = useState(null);
  const [note, setNote] = useState("");
  const {moodEntries,setMoodEntries} = useContext(MoodeEntriesHistoryContext)
  
 

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
    <>
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
           {
            NavItem.map(({name,path},index)=> <Link key={index} to={path} >{name}</Link>)
           }
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsPopupOpen(true)}
              className="flex items-center gap-2 border-2 border-purple-600 text-purple-600 px-4 py-2 rounded-full hover:bg-purple-50 transition-colors"
            >
              <span className="text-lg">➕</span>
              Track Mood
            </button>
            <Link to="/login">
              <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors">
                Join Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
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
      </>
  );
}
