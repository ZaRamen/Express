const express = require('express');
const app = express();

const courses = [
    {
        id: 1,
        name: 'Web Development',
    },
    {
        id: 2,
        name: 'IT',
    },
    {
        id: 3,
        name: 'CyberSecurity',
    }
]

app.get('/', (req, res) => {
    res.send('Hello World!');
});

//get courses
app.get('/api/courses', (req,res) =>{
    
    res.send(courses);
})

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) {
        res.status(404).send('Course not found');
        return;
    }
    return res.send(course);
})

app.listen(3000, () => { 
    console.log('app listening on port 3000'); 
});


// nodemon = ./node_modules/nodemon/bin/nodemon.js