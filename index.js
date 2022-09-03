require('dotenv').config();
const express = require('express');
const fs = require('fs');
const usersRouter = require('./routes/users.route')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;


// middleware
app.use(cors());
app.use(express.json());

app.use('/user', usersRouter);

// Initial check
module.exports.userData = app.get('/user', (req, res) => {
    // res.send('Welcome to first backend assignment');
    if (req.url = '/') {
        fs.readFile('./person_api/person.json', (err, data) => {
            if (err) {
                res.write('Failed to read data: ' + err.message);
                res.end();
            } else {
                res.write(data);
                res.end();
            }
        })
    }
});

app.all('*', (req, res) => {
    res.send("Router is not found")
})


app.listen(port, () => {
    console.log('Server is running');
})


process.on("unhandledRejection", (error) => {
    console.log(error.name, error.message);
    app.close(() => {
      process.exit(1);
    });
  });

