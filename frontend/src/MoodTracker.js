import React, {createContext , useContext , useEffect, useState } from "react";
import { Plus, TrendingUp } from "lucide-react";
import { format, isToday } from "date-fns";

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

export const MoodeEntriesHistoryContext = createContext({
  moodEntries:[],
  setMoodEntries:()=>{}
})

export default function MoodTracker({selectedMood , setSelectedMood}) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const {moodEntries, setMoodEntries} = useContext(MoodeEntriesHistoryContext);
  const [note, setNote] = useState("");
  const [averageMood, setAverageMood] = useState(0);

  useEffect(() => {
    localStorage.setItem("moodEntries", JSON.stringify(moodEntries));
    calculateAverageMood();
  }, [moodEntries]);

  useEffect(() => {
    checkAndPromptMood();
    const interval = setInterval(checkAndPromptMood, 1000 * 60 * 30); // Check every 30 minutes
    return () => clearInterval(interval);
  }, []);

  const calculateAverageMood = () => {
    if (moodEntries.length === 0) {
      setAverageMood(0);
      return;
    }
    const moodValues = moodEntries.map(
      (entry) => moodOptions.find((option) => option.emoji === entry.mood)?.value || 3
    );
    const avg = moodValues.reduce((a, b) => a + b, 0) / moodValues.length;
    setAverageMood(avg);
  };

  const checkAndPromptMood = () => {
    const now = new Date();
    const hour = now.getHours();

    const isMorningTime = hour >= 6 && hour < 10;
    const isEveningTime = hour >= 18 && hour < 22;

    const todayEntries = moodEntries.filter((entry) =>
      isToday(new Date(entry.date))
    );
    const hasMorningEntry = todayEntries.some((entry) => entry.timeOfDay === "morning");
    const hasEveningEntry = todayEntries.some((entry) => entry.timeOfDay === "evening");

    if (
      (isMorningTime && !hasMorningEntry) ||
      (isEveningTime && !hasEveningEntry)
    ) {
      setIsPopupOpen(true);
    }
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
  
  const getMoodTrend = () => {
    if (averageMood >= 4)
      return "You've been feeling great lately! Keep up the positive energy!";
    if (averageMood >= 3)
      return "You've been maintaining a balanced mood. That's good!";
    if (averageMood >= 2)
      return "Things have been a bit tough. Consider talking to someone or trying some new activities.";
    return "Your mood has been low. Please consider reaching out to a friend or professional for support.";
  };

  const getSuggestedActivities = () => {
    if (averageMood >= 4)
      return [
        "Try new hobbies",
        "Share positivity with others",
        "Set new goals",
      ];
    if (averageMood >= 3)
      return ["Regular exercise", "Mindfulness practice", "Social activities"];
    return [
      "Self-care activities",
      "Relaxation techniques",
      "Speak with a counselor",
    ];
  };

  return (
    <div className="w-full  bg-gray-50 p-4 mt-28">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold text-gray-800">Mood Tracker</h1>
            <button
              onClick={() => setIsPopupOpen(true)}
              className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              <Plus size={20} />
              Log Mood
            </button>
          </div>

          {/* Mood Analytics */}
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <h2 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <TrendingUp size={20} />
              Mood Insights
            </h2>
            <p className="text-gray-700 mb-2">{getMoodTrend()}</p>
            <div className="mt-2">
              <h3 className="font-medium mb-1">Suggested Activities:</h3>
              <ul className="list-disc list-inside text-gray-600">
                {getSuggestedActivities().map((activity, index) => (
                  <li key={index}>{activity}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Mood History */}
          <div className="space-y-4">
            {moodEntries.map((entry, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm text-gray-500">
                      {format(new Date(entry.date), "PPP")} - {entry.timeOfDay}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-2xl">{entry.mood}</span>
                      <p className="text-gray-700">{entry.note}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mood Input Popup */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full">
            <h2 className="text-xl font-semibold mb-4">How are you feeling?</h2>
            <div className="grid grid-cols-5 gap-2 mb-4">
              {moodOptions.map((option) => (
                <button
                  key={option.emoji}
                  onClick={() => setSelectedMood(option.emoji)}
                  className={`text-2xl p-2 rounded-lg hover:bg-gray-100 ${
                    selectedMood === option.emoji ? "bg-blue-100" : ""
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
              className="w-full p-2 border rounded-lg mb-4 h-24"
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
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}