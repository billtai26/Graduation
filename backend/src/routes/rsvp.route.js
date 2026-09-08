import express from 'express'
import {
  handleCreateRsvp,
  handleGetRsvps,
} from '../controllers/rsvp.controller.js'

const router = express.Router()

router.route('/').get(handleGetRsvps).post(handleCreateRsvp)

export const rsvpRoute = router
