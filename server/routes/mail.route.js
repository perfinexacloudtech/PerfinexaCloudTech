const express = require("express");
const { sendEmailController } = require("../controller/sendEmailController");

const router = express.Router();

router.post("/send-offer", sendEmailController);

module.exports = router;
