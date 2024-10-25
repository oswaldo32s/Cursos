const express = require('express');
const userRouter = require('./routes/userRouter');

const PORT = 3000

const app = express()

app.get('/', (req, res) => {
  console.log(req.params)
  console.log(req.query)
  res.send('Hola mundo')
})

app.use('/user', userRouter)

app.listen(PORT, () => {
  console.log(`Running express server on http://localhost:${PORT}`)
})

