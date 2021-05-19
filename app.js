const express = require('express')

const port = 3000
const app = express()

function responseTime(req, res) {
  const nowTime = Date.now()
  const reqTime = nowTime - req.reqText.startTime
  console.log(`Date: ${req.reqText.dateText} | ${req.reqText.method} from "${req.reqText.url}" | Total time : ${reqTime} ms`)
  res.end();
}

app.use('/', (req, res, next) => {
  const startTime = Date.now()
  const date = new Date(Date.now())
  const dateStr = date.toISOString().split('T')[0].toString()
  const timeStr = date.toTimeString().split(' ')[0].toString()
  req.reqText = {
    dateText: dateStr + ' ' + timeStr,
    startTime,
    method: req.method,
    url: req.originalUrl
  }
  next()
})

app.get('/', (req, res, next) => {
  res.send('列出全部 Todo')
  next()
}, responseTime)

app.get('/new', (req, res, next) => {
  res.send('新增 Todo 頁面')
  next()
}, responseTime)

app.get('/:id', (req, res, next) => {
  res.send('顯示一筆 Todo')
  next()
}, responseTime)

app.post('/', (req, res, next) => {
  res.send('新增一筆  Todo')
  next()
}, responseTime)

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})