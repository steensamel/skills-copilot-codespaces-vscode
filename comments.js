// Create web server
// Run this file: node comments.js

const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

const comments = [
    { id: 1, author: 'John', text: 'Hello!' },
    { id: 2, author: 'Alice', text: 'Hi!' },
    { id: 3, author: 'Bob', text: 'Good morning!' },
];

app.get('/comments', (req, res) => {
    res.json(comments);
});

app.listen(8000, () => {
    console.log('Server is running on http://localhost:8000');
});

// Run this file: node comments.js
// Open http://localhost:8000/comments in your browser
// You should see a JSON array with comments

// You can also use the curl command to get the comments:
// curl http://localhost