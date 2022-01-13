const bcrypt = require('bcrypt');
const SALT_ROUNDS = 12;

exports.makePassword = (password) => {
    return bcrypt.hashSync(password, SALT_ROUNDS);
}

exports.comparePassword = (password, hash) => new Promise((resolve, reject) => {
    bcrypt.compare(password, hash).then((result) => {
        return resolve(result);
    });
});