exports.isAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
    next()
  } else {
    res.redirect("/")
  }
}
exports.isAuthAllViews = (req, res, next) => {
  if (req.isAuthenticated()) {
    next()
  } else {
    next()
  }
}

exports.isNotAuth = (req, res, next) => {
  if (!req.isAuthenticated()) {
    next()
  } else {
    res.redirect("/profile")
  }
}

exports.setAuth = app =>(req, res, next) =>{
  // console.log("current user in sess: ",req.user.username)
   if (req.isAuthenticated()) {
     app.locals.logged = true
    } else {
      app.locals.logged = false
    }
    next()
}