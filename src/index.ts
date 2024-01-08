import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const port = process.env.APP_PORT || 3000;

const app = express()

app.get('/', (_req, res) => {
  res.status(200).json({ message: 'Hello from Market API' })
})

app.listen(port, () => {
  console.log(`App running on port: ${port}`)
})
