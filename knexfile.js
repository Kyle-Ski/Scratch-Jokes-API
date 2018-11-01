// Update with your config settings.

module.exports = {

  development: {
      client: 'pg',
      connection: 'postgres://localhost/jokes'
  },

  production: {
      client: 'postgresql',
      connection: process.env.DATABASE_URL + '?ssl=true'
  }

};