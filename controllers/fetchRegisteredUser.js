const userInformationModel = require("../modals/userInformationModel");

const fetchRegisteredUser = async (req, res) => {
  try {
    const data = await userInformationModel.find({});

    return res
      .status(200)
      .json({ success: true, data: data });
  } catch (error) {
    return res
      .status(200)
      .json({ success: false, message: "server error ", data: null });
  }
};

module.exports = fetchRegisteredUser;
