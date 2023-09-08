import data  from './data.js';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';


const app = express();
const PORT = 3000;

// Configuring cors middleware
app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// //creates an endpoint for the route `/`
app.get("/", (req, res) => {
    res.json("Hello Techtonica Server for a Game");
  });

// Make the GET request for the GAME Api for grabbing all the questions 


  // //hardcode the game response for testing reasons to don't saturate my API call. 
app.get('/api/game', (req, res) =>{
    res.json(data);
})



app.listen(PORT, () => console.log(`Hola! Server running on Port http://localhost:${PORT}`));