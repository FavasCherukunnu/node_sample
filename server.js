const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
app.use(cors());

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World');  
  });


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);  
});