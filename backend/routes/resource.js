const Resource = require('../models/resource');
const express = require('express');
const authenticateToken = require('../middleware/authMiddleware');
const router = express.Router();

// Resource Routes
router.post('/', authenticateToken, async (req, res) => {
    try {
      const resource = new Resource({
        title: req.body.title,
        description: req.body.description,
        mediaURL: req.body.mediaURL,
        basedContent: req.body.basedContent,
      });
      const savedResource = await resource.save();
      res.status(201).json(savedResource);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  router.get('/', async (req, res) => {
    try {
      const { average ,basedContent} = req.query;
      let query = {};
      if (basedContent) query.basedContent = basedContent;
      if (average) query.average = average;
      
      const resources = await Resource.find(query);
      res.json(resources);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

module.exports = router;