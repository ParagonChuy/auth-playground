const express = require('express');
const app = express();


// Tells express to look for sattic files there 
app.use(express.static('./server/static'));
app.use(express.static('./client/dist'));


// Starts the server
app.listen(3000, () => {
  console.log("App running on localhost:3000")
});
