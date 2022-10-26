const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json');
const courses= require('./data/courses.json');


app.get('/', (req, res) => {
    res.send('course API Running');
});

app.get('/courses-categories', (req, res) => {
    res.send(categories);
});
app.get('/category/:id', (req, res) =>{
    const id = req.params.id;
    const category_course = courses.filter(course => course.course_id  === id);
    res.send(category_course);
})

app.get('/courses/:id', (req, res)=>{
    const id = req.params.id
    const selectedCourse = courses.find(course => course._id === id);
    res.send(selectedCourse);
} )

app.listen(port, () => {
    console.log('courses Server running on port', port);
})