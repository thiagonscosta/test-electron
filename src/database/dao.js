import { reject } from "bluebird"

const sqlite3 = window.require('sqlite3')
const Promise = window.require('bluebird')

class DAO {
  constructor(dbFilePath) {
    this.db = new sqlite3.Database(dbFilePath, (err) => {
      if (err) {
        console.log('👎 Could not connected to database', err);
      } else {
        console.log('🤜🤛 Connected to database');
      }
    });
  } 
  
  run(sql, params = []) {
    return new Promise((resolve, reject) => {
      this.db.run(sql, params, function (err) {
        if (err) {
          console.log('🙄 Error running sql', err);
          reject(err);
        } else {
          resolve({ id: this.lastId });
        }
      });
    });
  }

  get(sql, params =[]) {
    return new Promise((resolve, reject) => {
      this.db.get(sql, params, (err, result) => {
        if (err) {
          console.log('😬 Error running sql', err);
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }

  all(sql, params = []) {
    return new Promise((resolve, reject) => {
      this.db.all(sql, params, (err, rows) => {
        if (err) {
          console.log('😒 Error running sql', err);
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }
}

export default DAO;