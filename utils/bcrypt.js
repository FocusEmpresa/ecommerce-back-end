const bcrypt = require('bcrypt-nodejs');

module.exports = {
    bcryptPassword: (password) => {
        const salt = bcrypt.genSaltSync();
        return bcrypt.hashSync(password, salt);
    },
    comparePassword: (password, hash) => (
        bcrypt.compareSync(password, hash)
    )
};
