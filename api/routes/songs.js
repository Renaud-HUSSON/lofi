const router = require('express').Router()
const Database = require('../config/Database')
const Song = require('../models/Song')

const database = new Database()
const db = database.connect()

router.get('/', (req, res) => {
  const song = new Song(db)

  song.read_all((err, results) => {
    if(err) return res.status(500).send({})

    res.send(results.rows)
  })
})

module.exports = router