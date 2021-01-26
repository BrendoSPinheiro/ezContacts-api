const db = require('../../database');

class CategoryRepository {
  async findAll() {
    const rows = await db.query('SELECT * FROM categories');

    return rows;
  }
}

module.exports = new CategoryRepository();