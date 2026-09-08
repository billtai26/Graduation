import { createNewRsvp, getAllRsvps } from '../models/rsvp.model.js'

export const handleCreateRsvp = async (req, res) => {
  try {
    const createdRecord = await createNewRsvp(req.body)
    res.status(201).json({
      message: 'Gửi xác nhận thành công!',
      data: createdRecord,
    })
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    })
  }
}

export const handleGetRsvps = async (req, res) => {
  try {
    const list = await getAllRsvps()
    res.status(200).json({
      data: list,
    })
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    })
  }
}
