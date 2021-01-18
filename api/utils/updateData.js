const fetch = require('node-fetch')
const Database = require('../config/Database')

const updateData = async () => {
  const limit = 25
  const api_key = process.env.YOUTUBE_API_KEY
  
  //Fetch youtube lives datas
  const data = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&eventType=live&maxResults=${limit}&order=viewCount&q=lofi&type=video&key=${api_key}`)
  const json = await data.json()

  const database = new Database()
  const db = database.connect()

  //Drop songs2 if it already exists
  db.query('DROP TABLE songs2', (err) => {
    if(err) console.log('songs2 doesn\'t exist')
  })

  try {
    //Create a new table
    db.query(`CREATE TABLE songs2 (
      id SERIAL PRIMARY KEY ,
      title varchar(250),
      channel varchar(50),
      channelId varchar(50),
      image varchar(100),
      video varchar(100)
    )`)
    
    //Add each live to the database
    json.items.map(video => {
      try {
        db.query(`INSERT INTO songs2 (title, channel, image, video, channelId)
        VALUES('${video.snippet.title}', '${video.snippet.channelTitle}', '${video.snippet.thumbnails.medium.url}', '${video.id.videoId}', '${video.snippet.channelId}')
        `)
      }catch(e){}
    })

    //Drop old songs table if it exists
    db.query('DROP TABLE songs', (err) => {
      if(err) console.log('songs doesn\'t exist')
    })
    
    //Rename songs2 to songs if no error occured
    db.query('ALTER TABLE songs2 RENAME TO songs')
  }catch(e){
    console.log(`Error while updaing datas: ${e}`)
  }

  console.log('datas updated')
}

module.exports = updateData