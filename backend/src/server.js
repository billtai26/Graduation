import express from 'express'
import cors from 'cors'
import { env } from './config/environment.js'
import { CONNECT_DB, CLOSE_DB } from './config/mongodb.js'
import { rsvpRoute } from './routes/rsvp.route.js'
import dns from "node:dns/promises";

dns.setServers(["1.1.1.1", "1.0.0.1"]);

const START_SERVER = () => {
  const app = express()

  app.use(cors())
  app.use(express.json())

  app.use('/api', rsvpRoute)

  const PORT = env.PORT
  const server = app.listen(PORT, () => {
    console.log(`Backend is running at port: ${PORT}`)
  })

  // Đóng kết nối DB khi tiến trình dừng
  process.on('SIGINT', async () => {
    await CLOSE_DB()
    console.log(`Database connection closed`)
    process.exit(0)
  })
}

CONNECT_DB()
  .then(() => console.log('Connected to MongoDB Cloud Atlas!'))
  .then(() => START_SERVER())
  .catch((error) => {
    console.error(error)
    process.exit(0)
  })
