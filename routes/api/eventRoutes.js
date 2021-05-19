const db = require('../../models');
const app = require('express');
const router = app.Router();

// GET: /api/events
router.get("/", async (req, res) => {
  try {
    const events = await db.Event.find({})
    res.json(events);
  } catch (error) {
    res.json(error);
  }
});

// POST: /api/events
router.post("./Pages/CreateEvent", async (req, res) => {
  try {
    const event = await db.Event.create(req.body);
    res.json(event);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
