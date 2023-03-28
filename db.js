const {Pool} = require('pg')

const{PGCONNECTIONSTRING} = porcess.env

const pool = new Pool ({
    PGCONNECTIONSTRING
})

module.exports = pool;