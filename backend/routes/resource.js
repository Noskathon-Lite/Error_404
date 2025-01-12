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
        type: req.body.type,
        mediaUrl: req.body.mediaUrl,
        tags: req.body.tags
      });
      const savedResource = await resource.save();
      res.status(201).json(savedResource);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  router.get('/', async (req, res) => {
    try {
      const { type, tag } = req.query;
      let query = {};
      if (type) query.type = type;
      if (tag) query.tags = tag;
      
      const resources = await Resource.find(query);
      res.json(resources);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

module.exports = router;