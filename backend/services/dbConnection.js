// Setup Postgresql connection
const Pool = require('pg').Pool

const db = new Pool({
    connectionString: 'postgres://bulqhftviqwzvf:9738a77ad0660e697634506a920d7c65873b670fe252e8c144693ad7867fd844@ec2-54-159-35-35.compute-1.amazonaws.com:5432/d5hs7h5rcpjk8a',
    ssl: true
})

// Allow untrusted / not verified by a certificate authority connection. Not good for prod but ok for dev.
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

module.exports = {
    db
}