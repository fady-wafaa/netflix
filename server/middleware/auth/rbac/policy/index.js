const roles = require('../../all_Rolse/roles');
const adminPlicy = require('./adminPlicy');
const userPolicy = require('./userPolicy');

const opts = {
  [roles.ADMIN]: {
    can: adminPlicy,
  },
  [roles.USER]: {
    can: userPolicy,
  },
};

module.exports = opts;
