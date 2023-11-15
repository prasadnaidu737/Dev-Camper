const { createUser, getUser, loginUser } = require("../controller/user");
const express = require("express");

const router = express.Router();

router.route("/").get(getUser).post(createUser);
router.route("/login").post(loginUser);

module.exports = router;
