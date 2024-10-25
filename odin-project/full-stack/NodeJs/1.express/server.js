const express = require('express');
const projectRouter = require('./routes/projectRouter')

const PORT = 3000

const app = express()

app.get('/', (req, res) => {
  console.log(req.params)
  console.log(req.query)
  res.send('Hola mundo')
})

app.get('/home/:username', (req, res) => {
  console.log(req.params)
  console.log(req.query)
  res.send(`<h1>Hola ${req.params.username}</h1><p>You are giving the following data: ${req.query}</p>`)
})

app.listen(PORT, () => {
  console.log(`Running express server on http://localhost:${PORT}`)
})

app.use('/project', projectRouter)