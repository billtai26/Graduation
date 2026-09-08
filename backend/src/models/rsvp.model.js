import { ObjectId } from 'mongodb'
import { GET_DB } from '../config/mongodb.js'

const RSVP_COLLECTION_NAME = 'rsvps'

const validateSchema = (data) => {
  if (!data.guestName || typeof data.guestName !== 'string') {
    throw new Error('Tên khách mời là bắt buộc')
  }

  if (!['yes', 'no', 'tentative'].includes(data.attendingStatus)) {
    throw new Error('Trạng thái tham dự không hợp lệ')
  }

  return {
    guestName: data.guestName.trim(),
    relationship: data.relationship?.trim(),
    attendingStatus: data.attendingStatus,
    wishes: data.wishes?.trim(),
  }
}

export const createNewRsvp = async (data) => {
  const validData = validateSchema(data)
  const result = await GET_DB()
    .collection(RSVP_COLLECTION_NAME)
    .insertOne(validData)
  return await GET_DB().collection(RSVP_COLLECTION_NAME).findOne({
    _id: result.insertedId,
  })
}

export const getAllRsvps = async () => {
  return await GET_DB()
    .collection(RSVP_COLLECTION_NAME)
    .find({})
    .sort({
      createdAt: -1,
    })
    .toArray()
}
