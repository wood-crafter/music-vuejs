const fs = require('fs')
const path = require('path')
const express = require('express')
const cors = require('cors')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const userService = require('./users.service')
const songsService = require('./songs.service')
const artistService = require('./artists.service')

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

app.head('/auth', (req, res) => {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    res.sendStatus(401)
    return
  }

  const token = authHeader.substring('Bearer '.length)

  jwt.verify(token, SECRET_KEY, (err, payload) => {
    if (err) {
      console.error(err)
      res.sendStatus(401)
      return
    }
    res.sendStatus(200)
  })
})

app.get('/songs/top/:amount', async (req, res) => {
  const amount = req.params.amount
  const topSong = await songsService.getTop(amount)

  res.send(topSong)
})

app.get('/songs/news/:amount', async (req, res) => {
  const amount = req.params.amount
  const news = await songsService.getNews(amount)

  res.send(news)
})

app.get('/artists/top/:amount', async (req, res) => {
  const amount = req.params.amount
  const topArtist = await artistService.getTop(amount)

  res.send(topArtist)
})

app.get('/artists/:id', async (req, res) => {
  const id = req.params.id
  const artist = await artistService.getById(id)

  res.send(artist)
})

app.get('/public/song/:filename', (req, res) => {
  const filename = `${req.params.filename}.mp3`
  const filePath = path.join(__dirname, '../public/songs', filename)
  console.info(filePath)

  fs.access(filePath, fs.constants.R_OK, (err) => {
    if (err) {
      console.error(err)
      return res.sendStatus(err.code === 'ENOENT' ? 404 : 400)
    }

    res.download(filePath)
  })
})

app.get('/public/artist/:filename', (req, res) => {
  const filename = `${req.params.filename}.jpg`
  const filePath = path.join(__dirname, '../public/artists', filename)
  console.info(filePath)

  fs.access(filePath, fs.constants.R_OK, (err) => {
    if (err) {
      console.error(err)
      return res.sendStatus(err.code === 'ENOENT' ? 404 : 400)
    }

    res.download(filePath)
  })
})

app.get('/public/songs_avatar/:filename', (req, res) => {
  const filename = `${req.params.filename}.jpg`
  const filePath = path.join(__dirname, '../public/songs_avatar', filename)
  console.info(filePath)

  fs.access(filePath, fs.constants.R_OK, (err) => {
    if (err) {
      console.error(err)
      return res.sendStatus(err.code === 'ENOENT' ? 404 : 400)
    }

    res.download(filePath)
  })
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
