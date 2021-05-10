const express = require('express')

const port = 3000
const app = express()

app.use('/', (req, res, next) => {
  const date = new Date(Date.now())
  const dateStr = date.toISOString().split('T')[0].toString()
  const timeStr = date.toTimeString().split(' ')[0].toString()
  console.log(dateStr, timeStr, '|', req.method, 'from', req.originalUrl)
  next()
})

app.get('/', (req, res) => {
  res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})