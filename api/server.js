require('dotenv').config()
const express = require('express')
const updateData = require('./utils/updateData')

const app = express()

//Update db datas every 15 minutes
setInterval(updateData, 60 * 15 * 1000)

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Api is running on port: ${PORT}`)
})