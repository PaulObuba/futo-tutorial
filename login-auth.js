module.exports = (req, res, next) => {
  if (req.session.userAuth) {
    next();
  } else {
    req.session.error = "You have to Login as User first";
    res.redirect("/");
  }
};
