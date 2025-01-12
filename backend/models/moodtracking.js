const mongoose = require("mongoose");

const moodTrackSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  moodEntries: [
    {
      date: { type: Date, required: true }, 
      mood: { 
        type: String, 
        required: true 
      },
      note: { type: String }, 
      timeOfDay: { type: String, enum: ["morning", "evening"], required: true }, 
    },
  ],
  averageMood: { type: Number, min: 1, max: 5 }, 
  lastPromptDate: { type: Date }, 
});

module.exports = mongoose.model("moodtracking", moodTrackSchema);
