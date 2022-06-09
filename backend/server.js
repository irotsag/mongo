const express = require('express');
//const router = express.Router();
const cors = require('cors');
const mongoose = require('mongoose');

//environment variables for dotenv file
require('dotenv').config();

//creating the express server
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

//database connection
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

//requiring and using the files
const tasksRouter = require('./routes/tasks');
const usersRouter = require('./routes/users');

app.use('/tasks', tasksRouter);
app.use('/users', usersRouter);

//router.get('/', (res, req) => {
//    res.json(tasks.get());
//});

//starting the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

//module.exports = router;



