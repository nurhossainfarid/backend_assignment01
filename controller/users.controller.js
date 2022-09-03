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
    const { limit } = req.query
    // add user limitations
    if ('/all') {
        res.send(users.slice(0, limit));
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

    // check valid id
    if (Number(id) !== newData.id) {
        console.log("Invalid id");
        res.send('invalid user')
    } else {
        newData.id = id;
        newData.name = req.body.name;
        newData.gender = req.body.gender;
        newData.contact = req.body.contact;
        newData.address = req.body.address;
        newData.photoUrl = req.body.photoUrl;
        res.send(newData);
    }
}


// delete 
module.exports.deleteUser = (req, res, next) => {
    const { id } = req.params;
    const userId = users.find(user => user.id === Number(id));
    const newData = users.filter(user => user.id !== Number(id));
    // check valid id
    if (Number(id) !== userId.id) {
        res.send("Invalid user or Id")
    } else {
        res.send(newData);
    }
}
