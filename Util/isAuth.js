function checkAuthenticated(req, res, next) {
  console.log("checkAuthenticated", req.user);
  if (req.isAuthenticated()) {
    return next();
  } else res.redirect("/login");
}

module.exports = checkAuthenticated;
