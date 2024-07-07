const express = require('express');
const { getAssessments } = require('./controllers/assessmentController')
const app = express();

// Middleware
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/assessment', getAssessments);

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
    console.log(`Assessment Service running on port ${PORT}`);
});
