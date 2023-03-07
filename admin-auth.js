module.exports = (req, res, next) => {
  if (req.session.adminAuth) {
    next();
  } else {
    req.session.error = "You have to Login as Admin first";
    res.redirect("/");
  }
};
