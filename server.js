const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');

app.use(cors());
app.use(express.json());
app.use('/images', express.static('images'));
app.use('/audio', express.static('audio'));
app.use(express.static('.'));

app.get('/api/profile', (req, res) => {
  const data = fs.readFileSync('./profile.json', 'utf-8');
  res.json(JSON.parse(data));
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
