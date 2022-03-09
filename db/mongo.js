
const mongoose = require('mongoose')

const connectionString = process.env.MONGO_DB_URI

// connect mongo

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('db crud connected')
  })
  .catch((e) => {
    console.error(e)
  })
