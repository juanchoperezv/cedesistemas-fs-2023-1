const errorHandler = require('../../utils/errorHandler');
const {USER_PASS_WRONG, SERVER_ERROR,
      USER_NOT_FOUND, USER_ALREADY_EXISTS} = require('./utils/dict.errors');
const  User = require('./models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const login = async (email, password) => {
  try {
    const validateUser = await User.findOne({ email: email, isRemoved: false });
    if (validateUser) {
      const matchPass = await bcrypt.compare(password, validateUser.password);
      if (matchPass) {
        //datos que queremos poner en el token
        const payLoad = {
          userId: validateUser._id
        };

        const token = jwt.sign( payLoad, process.env.JWT_SECRET);
        return {
          token: token
        };
      }
    }

    throw errorHandler(USER_PASS_WRONG);
  } catch (error) {
    throw error.handled? error :  errorHandler(SERVER_ERROR);
  }
};

const logout= (userId) => {
  return {
    message: 'User loged out '
  };
};

const info= async (userId) => {
  try {
    const validateUser = await User.findById(userId);
    return validateUser ? validateUser : errorHandler(USER_NOT_FOUND);

  } catch (error) {
    throw error.handled? error : errorHandler(SERVER_ERROR);
  }
};

const signup = async (userData) => {
  try {

    const validateUser = await User.findOne({ email: userData.email });
    if (validateUser) {
        throw errorHandler(USER_ALREADY_EXISTS);
    }

    //encripcion de password
    const passhashed = await bcrypt.hash(userData.password, 10);
    userData.password = passhashed;

    const user = User(userData);

    await user.save();
    return {
      message: 'usuario creado',
      user: user
    };
  } catch (error) {
    throw error.handled? error :  errorHandler(SERVER_ERROR, error);
  }
};

module.exports = {
  login,
  logout,
  info,
  signup
}
