require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());

//va el puerto del cluster entre ('')
const uri = 'mongodb+srv://rorotex:1234@maincluster.xvtlibt.mongodb.net/?retryWrites=true&w=majority&appName=MainCluster';
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };
async function run() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (error) {
    console.log(error);
  }
}

run();

// Import routes
const braillecontroller = require('./routes/braille-routes-api');
const usercontroller = require('./routes/users-routes-api');

//use routes
app.use('/braille', braillecontroller);
app.use('/user', usercontroller);

//debe ser el puerto por defecto el (3000) y va entre comillas paradas (`)
app.listen(4000, () => {
    console.log(`Server running at http://localhost:${4000}`);
  });