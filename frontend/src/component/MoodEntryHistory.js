import React, { useContext } from 'react'
import { MoodeEntriesHistoryContext } from '../MoodTracker'
import { formatDate } from '../Home'


export default function MoodEntryHistory() {
    const {moodEntries,averageMood} = useContext(MoodeEntriesHistoryContext)
    console.log({moodEntries,averageMood})
  return (
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
  )
}
