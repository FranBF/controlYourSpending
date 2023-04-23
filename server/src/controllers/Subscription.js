import Subscription from '../models/Subscription.js'
import { createError } from '../error.js'

export const createEntry = async (req, res, next) => {
  const entry = new Subscription({ userId: req.user.id, ...req.body })
  try {
    await entry.save()
    res.status(200).json(entry)
  } catch (error) {
    next(error)
  }
}

export const getAllUserSubscriptions = async (req, res, next) => {
  try {
    const entries = await Subscription.find().where('userId').equals(req.user.id)
    res.status(200).json(entries)
  } catch (error) {
    next(error)
  }
}

export const updateEntry = async (req, res, next) => {
  try {
    const entry = await Subscription.findById(req.params.id)
    if (!entry) return next(createError(404, 'Not found'))
    if (entry.userId === req.user.id) {
      const updatedEntry = await Subscription.findByIdAndUpdate(req.params.id, {
        $set: req.body
      }, { new: true })
      res.status(200).json(updatedEntry)
    }
    return next(createError(403, 'You are not allowed to do this'))
  } catch (error) {
    next(error)
  }
}

export const deleteEntry = async (req, res, next) => {
  try {
    const entry = await Subscription.findById(req.params.id)
    if (!entry) return next(createError(404, 'Not found'))
    if (entry.userId === req.user.id) {
      await Subscription.findByIdAndDelete(req.params.id)
      res.status(200).json('Deleted')
    }
    return next(createError(403, 'You are not allowed to do this'))
  } catch (error) {
    next(error)
  }
}
