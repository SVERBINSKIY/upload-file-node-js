const express = require('express')
const fileMiddleware = require('./file')

const app = express() 
const PORT = process.env.PORT || 3000

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  next()
})
app.use(express.json())
app.use(fileMiddleware.single('avatar'))

app.post('/upload', (req, res) => {
  try {
    const file = req.file
    res.status(200).json({fileName: file.filename})
  } catch (e) {
    console.log(e)
  }
})

app.listen(PORT, () => {
  console.log(`Server has been started on PORT ${PORT}`)
})