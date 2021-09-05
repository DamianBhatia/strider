var bcrypt = require('bcryptjs');


encrypt = (pass) => {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(pass, salt);
    console.log(hash)
    return hash
}
dcrypt = (pass,hash) => {
    return bcrypt.compareSync(pass, hash);
}

module.exports = {
    encrypt,
    dcrypt
}