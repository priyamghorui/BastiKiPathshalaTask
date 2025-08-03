const userInformationModel = require("../modals/userInformationModel");

const userRegister = async (req, res) => {
  try {
    const { name, age, email, address, remark, mobile } = req.body;
    // console.log(req.body);
    
    if (
      email == "" ||
      name == "" ||
      age == "" ||
      address == "" ||
      remark == "" ||
      mobile == ""
    ) {
      return res
        .status(401)
        .json({ success: false, message: "Data not filled properly!!" });
    }
    const checkEmail = await userInformationModel.findOne({ email });
    if (checkEmail) {
      return res.status(401).json({
        success: false,
        message: "User already existed!!",
      });
    } else {
      await userInformationModel.create({
        name,
        age,
        email,
        address,
        remark,
        mobile,
      });

      return res
        .status(200)
        .json({ success: true, message: "User registered !! " });
    }
  } catch (error) {
    // console.log(error);
    
    return res
      .status(401)
      .json({ success: false, message: "Internal server error" });
  }
};

module.exports = userRegister;
