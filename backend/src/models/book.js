const { EntitySchema } = require('typeorm');
module.exports = new EntitySchema({
  name: 'Book',
  tableName: 'books',
  columns: {
    id: { primary: true, type: 'int', generated: true },
    title: { type: 'varchar', length: 255 },
    author: { type: 'varchar', length: 255 },
    publishedYear: { type: 'int', nullable: true }
  }
});
