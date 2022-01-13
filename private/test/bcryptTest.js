const bcrypt = require('bcrypt');
const bcryptUtil = require('../../utils/BcryptUtil');

const PW = 'testpassword';
const ENCRYPTED_PW = bcryptUtil.makePassword(PW);

console.log(PW);
console.log(ENCRYPTED_PW);

bcryptUtil.comparePassword(PW, ENCRYPTED_PW).then((value) => console.log(value));