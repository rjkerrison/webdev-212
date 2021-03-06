module.exports = (req, res, next) => {
  // checks if the user is logged in when trying to access a specific page
  if (!req.user.isAdmin) {
    return res.status(403).send('DENIED')
  }
  next()
}
