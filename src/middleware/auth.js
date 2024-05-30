import jwt from "jsonwebtoken";

const AuthenticateMiddleware = (req, res, next) => {
  let token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: "UnAuthorized" });
  }
  token = token.replace("Bearer ", "");
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    console.log(decoded, "req.body");
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "UnAuthorized", error});
  }
};

export default AuthenticateMiddleware
