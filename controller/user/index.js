const express = require("express");
const { registar, updateDetail, delteteData, login } = require("./controller");
const router = express.Router();
const passport = require("passport");
const isAuthCkeck = require("../../Util/isAuth");

router.post("/", registar);
router.post("/login", passport.authenticate("local"), login);
router.put("/", isAuthCkeck, updateDetail);
router.delete("/", isAuthCkeck, delteteData);

module.exports = router;
