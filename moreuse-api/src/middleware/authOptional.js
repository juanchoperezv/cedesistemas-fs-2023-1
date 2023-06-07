

const authOptional = (req, res, next) => {
  req.authNotMandatory = true;

  //funcion callback que se ejecuta cuando se usa el middleware
  next();

};

module.exports = authOptional;
