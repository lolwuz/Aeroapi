// 1
const JWT = require('jsonwebtoken')
const User = require('../models/user')
const { JWT_SECRET } = require('../config/index')
 
// 2
signToken = ((user) => {
  return JWT.sign({
    iss: 'ApiAuth',
    sub: user.id,
    iat: new Date().getTime(),
    exp: new Date().setDate(new Date().getDate() + 1)
  }, JWT_SECRET)
})
 
 
module.exports = {
  // 3
  signup: async (req, res, next) => {
    console.log('UsersController.signup() called')
 
    const { email, password } = req.value.body
 
    const foundUser = await User.findOne({ email })
    if (foundUser) {
      return res.status(403).json({ error: 'Email is already in use' })
    }
    const newUser = new User({ email, password })
    await newUser.save()
 
    const token = signToken(newUser)
 
    res.status(200).json({ token })
  },
 
  // 4
  signin: async (req, res, next) => {
 
    const token = signToken(req.user)
    res.status(200).json({ token })
  },
 
  // 5
  secret: async (req, res, next) => {
    res.json({ secret: "resource" });
  }
}