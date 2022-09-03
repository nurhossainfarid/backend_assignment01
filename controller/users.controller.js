const fs = require('fs')
let users = require('../person_api/person.json');
let usersData = require('../index');


// let persons = 
// let maxUsers = users.length;
// let minUser = 1;
// let randomNumber =Math.floor(Math.random() * 10);

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
let maxUsers = users.length;

// get method
module.exports.getRandomUser = (req, res, next) => {
    const randomUserId = getRndInteger(1, maxUsers);
    const randomUser = users.find(user => user.id === randomUserId);
    console.log(maxUsers, randomUserId);
    res.send(randomUser);
    next();
}
module.exports.getAllUsers = (req, res, next) => {
    // console.log(users)
    if ('/all') {
        res.send(usersData)
    }
    next();
}

// post method
module.exports.saveUser = (req, res, next) => {
    users.push(req.body);
    // console.log(req.body);
    res.send(users);
}

// patch
module.exports.updateUser = (req, res, next) => {
    const {id, name, gender, contact, address, photoUrl} = req.params;
    const filter = { _id: id };
    const newData = users.find(user => user.id === Number(id));
    newData.id = id;
    newData.name = req.body.name;
    newData.gender = req.body.gender;
    newData.contact = req.body.contact;
    newData.address = req.body.address;
    newData.photoUrl = req.body.photoUrl;
    res.send(newData);
}


// delete 
module.exports.deleteUser = (req, res, next) => {
    const { id } = req.params;
    const newData = users.filter(user => user.id !== Number(id));
    res.send(newData);
}
