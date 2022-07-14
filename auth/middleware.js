// authorization: "Bearer afhlanfalndlafnlsjfnaldnaslkdmalksdmnalkdnfa";
const { toData } = require("../auth/jwt");
const User = require("../models").user;

async function auth(req, res, next) {
  // 1. check for authorization header and "split" it.
  const auth = req.headers.authorization;

  if (auth) {
    const splitHeader = auth.split(" ");
    if (!splitHeader[1]) {
      return res.status(401).send("you must send a token");
    }

    const token = splitHeader[1];
    try {
      console.log("token?", token);
      const data = toData(token);
      console.log("VALID TOKEN! :) this token is from:", data);
      const user = await User.findByPk(data.userId);

      req.user = user;

      next();
    } catch (e) {
      console.log("INVALID TOKEN!");
      return res.status(401).send("token invalid");
    }

    // call jwt library to check if token is valid

    // if it is => next()

    // if it's not => 401
  } else {
    console.log("no token sent!");
    return res.status(401).send("you must send a token");
  }
  // 2. if authorization header is there, auth type is Bearer and we have something at auth[1] we proceed to check the token.
  //    If not, we return a 401 status and the message: 'Please supply some valid credentials
  //    Remember to try/catch the call to "toData()".
  // 3. Use the value returned from "toData()" to look for that user in your database with User.findByPk
  // 4. If not found, set status to 404 "no user found";
  // 5. If user is found, set it to `req.user = user` and call next();
}

module.exports = auth;
