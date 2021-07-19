const fs = require('fs')
const path = require('path')
const express = require('express')
const cors = require('cors')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const userService = require('./users.service')

const app = express()
const PORT = 8080
const SECRET_KEY = 'HuckFitler'

app.use(cors())
app.use(express.json())

app.listen(PORT, () => {
  console.info(`Server started at http://localhost:${PORT}`)
})

app.post('/signup', async (req, res) => {
  const body = req.body
  const saltRounds = 10
  const existedUser = await userService.findByUsername(body.username)

  if (existedUser) {
    console.info('Username existed!')
    res.sendStatus(400)
    return
  } else {
    const password = await hashPromise(body.password, saltRounds)
    userService.addOne(body.username, password)
    const token = jwt.sign({ username: body.username }, SECRET_KEY)
    res.send(token)
  }
})

app.post('/signin', async (req, res) => {
  const body = req.body

  const existedUser = await userService.findByUsername(body.username)

  if (existedUser) {
    bcrypt.compare(body.password, existedUser.password, (e, fit) => {
      if (e) {
        console.error(e)
        return
      }
      if (fit) {
        const token = jwt.sign({ username: body.username }, SECRET_KEY)
        console.info(token)
        res.send(token)
        return
      }
      console.info('Wrong password!')
      res.sendStatus(400)
      return
    })
  } else {
    console.info('User not found!')
    res.sendStatus(400)
    return
  }
})

const hashPromise = (password, saltRounds) => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, saltRounds, function (e, hash) {
      if (e) {
        console.error(e)
        reject(e)
      }
      resolve(hash)
    })
  })
}
