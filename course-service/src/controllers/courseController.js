const getCourses = (req, res) => {
    const courses = [
        { id: 1, name: 'Course 1', description: 'This is a Math course' },
        { id: 2, name: 'Course 2', description: 'This is a English course' }
    ];
    res.json(courses);
};

module.exports = {
    getCourses,
};
