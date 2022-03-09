// establezco la utilizacion de var de entorno
require('dotenv').config()
require('./db/mongo')

const handleError = require('./middleware/handleError')
const notFound = require('./middleware/notFound')

const express = require('express')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT

const router = require('./router')

app.use(cors())
app.use(express.json())
app.use(express.static("public"))


app.use(router)
app.use(notFound)
app.use(handleError)


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
