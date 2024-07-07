const getAssessments = (req, res) => {
    const assessments = [
        { id: 1, name: 'Assessment 1', score: '85%' },
        { id: 2, name: 'Assessment 2', score: '90%' }
    ];
    res.json(assessments);
};

module.exports = {
    getAssessments,
};
