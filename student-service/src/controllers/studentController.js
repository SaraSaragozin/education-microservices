const getStudents = (req, res) => {
    const students = [
        { id: 1, name: 'Student 1', progress: '80%' },
        { id: 2, name: 'Student 2', progress: '90%' }
    ];
    res.json(students);
};

module.exports = {
    getStudents,
};
