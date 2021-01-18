const fetch = require('node-fetch')
const Database = require('../config/Database')

const updateData = async () => {
  const limit = 25
  const api_key = process.env.YOUTUBE_API_KEY
  
  const data = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&eventType=live&maxResults=${limit}&order=viewCount&q=lofi&type=video&key=${api_key}`)
  const json = await data.json()

  const database = new Database()
  const db = database.connect()

  db.query('DROP TABLE lofi2', (err) => {
    if(err) console.log('lofi2 doesn\'t exist')
  })

  try {
    //Create a new table
    db.query(`CREATE TABLE lofi2 (
      id SERIAL PRIMARY KEY ,
      title varchar(250),
      channel varchar(50),
      image varchar(100),
      video varchar(100)
    )`)
    
    json.items.map(video => {
      try {
        db.query(`INSERT INTO lofi2 (title, channel, image, video)
        VALUES('${video.snippet.title}', '${video.snippet.channelTitle}', '${video.snippet.thumbnails.medium.url}', '${video.id.videoId}')
        `)
      }catch(e){}
    })

    //Drop old table and rename the new one to lofi if no error has occured before
    db.query('DROP TABLE lofi', (err) => {
      if(err) console.log('lofi doesn\'t exist')
    })
    
    db.query('ALTER TABLE lofi2 RENAME TO lofi')
  }catch(e){
    console.log(`Error while updaing datas: ${e}`)
  }

  console.log('datas updated')
}

module.exports = updateData