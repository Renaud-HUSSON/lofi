class Song {
  #table = 'songs'
  #conn

  constructor(db){
    this.#conn = db
  }

  read_all(callback){
    const sql = `SELECT * FROM ${this.#table}`
    
    this.#conn.query(sql, callback)
  }
}

module.exports = Song