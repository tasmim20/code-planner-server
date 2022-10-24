const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require('./data/courses.json');


app.get('/', (req, res) => {
    res.send('course API Running');
});

app.get('/courses-catagories', (req, res) => {
    res.send(courses)
});

app.listen(port, () => {
    console.log('courses Server running on port', port);
})