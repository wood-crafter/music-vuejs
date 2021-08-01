const db = require('./db')
const connection = db.getConnection()

const findById = (id) => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM songs WHERE id = ?", id, (e, result, fields) => {
      if(e){
        console.error(e)
        reject(e)
      } else {
        resolve(result[0])
      }
    })
  })
}

const getTop = (amount) => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM songs ORDER BY mark ASC", (e, result, fields) => {
      if(e){
        console.error(e)
        reject(e)
      } else {
        resolve(result.slice(0, amount))
      }
    })
  })
}

module.exports = {
  findById,
  getTop
}