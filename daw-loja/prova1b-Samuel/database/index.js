const knex = require('knex')({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'habilx',
      password : 'koihw2017',
      database : 'dawdb'
    }
  });

  module.exports = knex;