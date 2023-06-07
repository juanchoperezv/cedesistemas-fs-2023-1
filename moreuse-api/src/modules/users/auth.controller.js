const authService = require('./auth.service');

//endpoint login
const login = async (req, res) => {
  try {
    const {email, password} = req.body;
    const response = await authService.login(email, password);
    res.status(200).json(response);
  } catch (error) {
    res.status(error.status).json(error.response);
  }
}

//endpoint logout
const logout = (req, res) => {
  const userId = req.payLoad.userId;
  const response = authService.logout(userId);
  res.status(200).json(response);
}

//endpoint info
const info = async (req, res) => {

  try {
    const userId = req.payLoad.userId;
    const response = await authService.info(userId);
    res.status(200).json(response);
  } catch (error) {
    res.status(error.status).json(error.response);
  }
}

//endpoint signup
const signup = async (req, res) => {
  try {
    const user = req.body;
    const response = await authService.signup(user);
    res.status(200).json(response);
  } catch (error) {

    res.status(error.status).json(error.response);
  }
}

module.exports = {
  login,
  logout,
  info,
  signup
}
