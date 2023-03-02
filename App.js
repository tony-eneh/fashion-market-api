const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

const defaultPath = path.join(__dirname, '/public');

app.use(cors());

app.use(express.static(defaultPath));

const PORT = process.env.PORT || 50000;
app.listen(PORT, () => console.log("server started. listening on port: ", PORT))