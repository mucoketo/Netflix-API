const router = require("express").Router();
const {
  getAll,
  createUser,
  updateUser,
  deleteUserById,
} = require("../../models/users");

// GET http://localhost:3000/api/users
router.get("/", async (req, res) => {
  try {
    const [rows] = await getAll();
    res.json(rows);
  } catch (error) {
    res.json({ error: error.message });
  }
});
// POST http://localhost:3000/api/users
router.post("/", (req, res) => {
  createUser(req.body)
    .then(([result]) => res.json(result))
    .catch((err) => res.json({ error: err.message }));
});

// PUT http://localhost:3000/api/users/idUser
router.put("/:idUser", async (req, res) => {
  try {
    const [result] = await updateUser(req.params.idUser, req.body);
    res.json(result);
  } catch (error) {
    res.json({ error: error.message });
  }
});

//DELETE http://localhost:3000/api/users/idUser
router.delete("/:idUser", async (req, res) => {
  try {
    const [result] = await deleteUserById(req.params.idUser);
    res.json(result);
  } catch (error) {
    res.json({ error: error.message });
  }
});

module.exports = router;
