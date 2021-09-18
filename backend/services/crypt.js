var bcrypt = require('bcryptjs');

const encrypt = (pass) => {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(pass, salt);
    console.log(hash)
    return hash
}

const dcrypt = (pass,hash) => {
    return bcrypt.compareSync(pass, hash.trim());
}

module.exports = {
    encrypt,
    dcrypt,
}