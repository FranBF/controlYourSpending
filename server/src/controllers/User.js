import User from '../models/User.js'
import { createError } from '../error.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

export const signUp = async (req, res) => {
  try {
    const salt = bcrypt.genSaltSync()
    const hash = bcrypt.hashSync(req.body.password, salt)
    const newUser = new User({ ...req.body, password: hash })
    await newUser.save()
    res.status(200).json('User Created')
  } catch (error) {
    console.log(error)
  }
}

export const signIn = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username })
    if (!user) return next(createError(404, 'User not found'))

    const isCorrect = await bcrypt.compare(req.body.password, user.password)
    if (!isCorrect) return next(createError(401, 'Wrong credentials'))

    const token = jwt.sign({ id: user._id }, process.env.JWT)
    const { password, ...others } = user._doc // le quito la contraseña y le devuelvo lo otro

    res.cookie('access_token', token, {
      httpOnly: true
    }).status(200).json(others)
  } catch (error) {
    next(error)
  }
}
