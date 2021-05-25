const db = require('../../models');
const app = require('express');
const router = app.Router();

// GET: /api/users/:id
router.get("/:id", async ({ params: { id } }, res) => {
  try {
    const user = await db.User.findOne({ _id: id })
      .populate("events");
    res.json(user);
  } catch (err) {
    res.json(err);
  };
});

// GET: /api/users
router.get("/", async (req, res) => {
  try {
    const users = await db.User.find({});
    res.json(users);
  } catch (err) {
    res.json(err);
  };
});

// POST: /api/users
router.post("/", async ({ body }, res) => {
  try {
    const users = await db.User.create(body);
    res.json(users);
  } catch (err) {
    res.json(err);
  };
});

// // PUT update a user
router.put('/:id', async ({ params: { id }, body }, res) => {
  try {
    const userData = await User.update(body, {
      where: { id }
    });
    if (!userData[0]) {
      res.status(404).json({ message: 'No user with this id!' });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
