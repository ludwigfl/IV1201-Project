const express = require('express'); // Importing express
const cors = require("cors");

const app = express(); // Creating an express app

app.use(cors()); // allow all origins during development
//app.use(cors({
//    origin: `http://localhost:5500` // or whatever port frontend runs on
//}));

// Create a route that sends a response when visiting the homepage
app.get('/', (req, res) => {
    res.send('<h1>Hello, Express.js Server!</h1>');
});

const port = 3000;
// Set up the server to listen on port 3000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});