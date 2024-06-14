const { createUser } = require("./user.controller.js");

const router = require("express").Router();

// router.patch("/profile", auth, updateProfile);
// router.get("/profile/:id", getProfile);
router.post("/create-user", createUser);

module.exports.UserRouter = router;
