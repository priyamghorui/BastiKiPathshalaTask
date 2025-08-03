const express = require("express");
const userRegister = require("../controllers/userRegister");
const apiAuthChecking = require("../middleware/apiAuthChecking");
const fetchRegisteredUser = require("../controllers/fetchRegisteredUser");



const router = express.Router();

router.post("/userRegister", userRegister);
router.post("/fetchRegisteredUserAdmin",apiAuthChecking, fetchRegisteredUser);


module.exports = router;
