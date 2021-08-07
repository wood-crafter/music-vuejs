const db = require('./db')
const connection = db.getConnection()

const getTop = (amount) => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM artist ORDER BY mark DESC", (e, result, fields) => {
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
  getTop,
}