const express = require('express');
const { getCourses } = require('./controllers/courseController');
const app = express();

// Middleware
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/courses', getCourses);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Course Service running on port ${PORT}`);
});
