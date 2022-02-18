const { signUp, signIn } = require("../Service/user.service");

const signup = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;

  const userCreation = await signUp(email, password, name);
  res.status(userCreation.status ? 201 : 400).json({
    ...userCreation,
  });
  return;
};

const signin = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const getUser = await signIn(email, password);
  if (getUser.status) {
    res.cookie("authToken", getUser.authToken, { maxAge: 3600000 });
    res.status(200).json({
      ...getUser,
    });
    return;
  }
  res.status(401).json({ error: "Cannot authenticate user" });
  return;
};

module.exports = {
  signin,
  signup,
};
