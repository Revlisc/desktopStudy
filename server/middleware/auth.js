import jwt from "jsonwebtoken";
import config from "config";

export const auth = async (req, res, next) => {
  //get token from req header
  const token = req.header("x-auth-token");

  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  //verify token

  try {
    const decoded = jwt.verify(token, config.get("mysecrettoken"));
    //when we assigned the token, the userId is included in the encoded token
    req.user = decoded.user;
    //pass userId to authenticateUser function
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is invalid" });
  }
};
