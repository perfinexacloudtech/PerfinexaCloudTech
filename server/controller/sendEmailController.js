const { sendOfferEmail } = require("../utils/mailService");

const sendEmailController = async (req, res) => {
  try {
    const { email, name } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is required!",
      });
    }

    const userName = name && name.trim() !== "" ? name : "There";

    const response = await sendOfferEmail(email, userName);

    return res.status(200).json({
      success: true,
      message: "Offer email sent successfully ✅",
      data: response,
    });

  } catch (error) {
    console.error("Email Send Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to send email",
      error: error.message,
    });
  }
};

module.exports = { sendEmailController };
