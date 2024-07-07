const express = require('express');
const app = express();

// Middleware
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/students', (req, res) => {
    const students = [
        { id: 1, name: 'Student 1', progress: '80%' },
        { id: 2, name: 'Student 2', progress: '90%' }
    ];
    res.json(students);
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log(`Student Service running on port ${PORT}`);
});
