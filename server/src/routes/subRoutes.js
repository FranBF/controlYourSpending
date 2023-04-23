import express from 'express'
import { createEntry, deleteEntry, getAllUserSubscriptions, updateEntry } from '../controllers/Subscription.js'
import { verifyToken } from '../verifyToken.js'

const router = express.Router()

router.post('/entry', verifyToken, createEntry)
router.get('/entries', verifyToken, getAllUserSubscriptions)
router.put('/entry/:id', verifyToken, updateEntry)
router.delete('/entry/:id', verifyToken, deleteEntry)

export default router
