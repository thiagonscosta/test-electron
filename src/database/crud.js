import { TouchBarSlider } from "electron";

class Crud {
  constructor(dao) {
    this.dao = dao
  }

  createTable() {
    const sql = `
      CREATE TABLE IF NOT EXISTS notes (
        id INTEGER PRIMARY KEY,
        note TEXT
      )`
    return this.dao.run(sql);
  }

  insert(note) {
    return this.dao.run('INSERT INTO notes (note) VALUES (?)', [note]);
  }

  delete(id) {
    return this.dao.run(`DELETE FROM notes WHERE id = ?`, [id]);
  }

  getAll() {
    return this.dao.all(`SELECT * FROM notes`);
  }
}

export default Crud;