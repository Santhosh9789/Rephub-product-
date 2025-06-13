const express = require('express');
const app = express();
const port = process.env.PORT || 3001; // Backend typically runs on a different port

app.get('/', (req, res) => {
  res.send('Hello from RepoHub Backend!');
});

app.listen(port, () => {
  console.log(`Backend server listening at http://localhost:${port}`);
});
