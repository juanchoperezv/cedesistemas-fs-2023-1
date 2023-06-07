const jwt = require('jsonwebtoken');

const authVerify = (req, res, next) => {
  if (req.headers.authorization &&
      req.headers.authorization.split(" ")[0] === "Bearer" ) {
    const token = req.headers.authorization.split(" ")[1];

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      //se le agrega al request la informacion del token ya decodificado
      req.payLoad = decoded;
    } catch (error) {
      if (!req.authNotMandatory) {
        return res.status(401).send('unauthorized');
      }

    }

  } else {
    if (!req.authNotMandatory) {
      return res.status(400).send('token is mandatory');
    }
  }

  //funcion callback que se ejecuta cuando se usa el middleware
  next();

};

module.exports = authVerify;
