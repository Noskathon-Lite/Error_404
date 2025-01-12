const Mood = require('../models/moodtracking');
const defaultMoods = require('../models/moods');
const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/authMiddleware');

// Mood Tracking Routes
router.post('/', authenticateToken, async (req, res) => {
    try {
      const mood = new Mood({
        userId: req.user.userId,
        mood: req.body.mood,
        intensity: req.body.intensity,
        notes: req.body.notes
      });
      const savedMood = await mood.save();
      res.status(201).json(savedMood);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  router.get('/' ,authenticateToken , async (req, res) => {
    try {
      const moods = await Mood.find({ userId: req.user.userId });
      res.json(moods);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  //add a new mood
  router.post("/addmood", async (req, res) => {
    try {
      const mood = new defaultMoods({
        emoji: req.body.emoji,
        label: req.body.label,
        value: req.body.value,
        suggestions: req.body.suggestions
      });
      const savedDefaultmOOD  = await mood.save();
      res.status(201).json(savedDefaultmOOD);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  //fetch default moods
  router.get("/defaultmood" , async (req, res) => {
    try {
      const moods = await defaultMoods.find();
      res.json(moods);
      console.log(moods);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  module.exports = router;