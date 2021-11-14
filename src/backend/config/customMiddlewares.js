const passport = require("passport");

module.exports.errorHandler = (err, req, res, next) => {
  if (err) {
    res.send({
      error: true,
      success: false,
      message: err.message,
    });
  }

  next();
};

module.exports.authorization = (req, res, next) => {
  passport.authenticate("jwt", { session: false }, function (err, user, info) {
    if (err) {
      next(new Error(e.message));
    }
    if (typeof info != "undefined") {
      // next(new Error(`${info.name}: ${info.message}`));
      next(new Error(`Unauthorized`));
    }
    if (user) {
      next();
    }
  })(req, res, next);
};
