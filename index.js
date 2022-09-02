require('dotenv').config();
const express = require('express');
const usersRouter = require('./routes/users.route')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;


// middleware
app.use(cors());
app.use(express.json());

app.use('/users', usersRouter);

app.all('*', (req, res) => {
    res.send("Router is not found")
})

// Initial check
app.get('/', (req, res) => {
    res.send('Welcome to first backend assignment');
});

app.listen(port, () => {
    console.log('Server is running');
})


process.on("unhandledRejection", (error) => {
    console.log(error.name, error.message);
    app.close(() => {
      process.exit(1);
    });
  });

