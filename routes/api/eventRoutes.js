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
router.post("/", async (req, res) => {
  try {
    const event = await db.Event.create(req.body);
    res.json(event);
  } catch (error) {
    res.json(error);
  }
});

// POST to register user for event
// POST: /api/events/:id/register
router.post("/:id/register/:user_id", async ({ params: { id, user_id } }, res) => {
  console.log('event id', id);
  console.log('user id', user_id);
  try {
    const user = await db.User.findOne({ _id: user_id })
    console.log('user', user);

    const event = await db.Event.findOneAndUpdate({ _id: id }, { $addToSet: { users: user.id } }, { new: true })

    user.events.push(event.id);
    await user.save();

    console.log('event', event);
    res.json(event);
  } catch(err) {
      console.log('err', err);
      res.json(err);
  };
});

module.exports = router;
