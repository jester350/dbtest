const { Pool, Client } = require('pg')
const pool = new Pool({
  user: 'jester',
  host: '127.0.0.1',
  database: 'test',
  password: 'Fugazi3077!',
  port: 3211,
})
pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  pool.end()
})
const client = new Client({
  user: 'jester',
  host: '127.0.0.1',
  database: 'test',
  password: 'Fugazi3077!',
  port: 3211,
})
client.connect()
client.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  client.end()
})