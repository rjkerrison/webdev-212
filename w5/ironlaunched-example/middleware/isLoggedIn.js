module.exports = (req, res, next) => {
  // checks if the user is logged in when trying to access a specific page
  if (!req.session.user) {
    const attemptedUrl = req.originalUrl

    return res.redirect(`/auth/login?return=${attemptedUrl}`)
  }
  req.user = req.session.user
  next()
}
