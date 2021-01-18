const {Client} = require('pg')

class Database {
  #conn
  
  #user = process.env.DB_USER || 'renaud'
  #host = process.env.DB_HOST || 'db'
  #password = process.env.DB_PASSWORD || 'root'
  #database = process.env.DB_PASSWORD || 'lofi'
  #port = process.env.DB_PORT || 5432

  constructor() {
    this.#conn = new Client({
      user: this.#user,
      host: this.#host,
      database: this.#database,
      password: this.#password,
      port: this.#port
    })
  }

  connect() {
    this.#conn.connect()

    return this.#conn
  }
}

module.exports = Database