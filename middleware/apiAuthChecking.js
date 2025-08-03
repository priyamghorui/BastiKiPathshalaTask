function apiAuthChecking(req, res, next) {
  const token = req.body?.token;
  // console.log(token);

  if (!token) {
    return res.status(401).json({ success: false, message: "token error" });
  }
  if (token == process.env.JWT_SECRET) {
    next(); // allow access
  } else {
    return res
      .status(401)
      .json({ success: false, message: "Token not matched!!" });
  }
}

module.exports = apiAuthChecking;
