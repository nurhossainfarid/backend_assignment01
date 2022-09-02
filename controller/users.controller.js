let users = require('../person_api/person.json');

module.exports.getAllUsers = ((req, res, next) => {
    // console.log(users)
    res.send(users)
})