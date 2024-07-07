async function fetchAndDisplay(url, elementId) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        const element = document.getElementById(elementId);
        element.innerHTML = formatData(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function formatData(data) {
    return data.map(item => {
        let result = '<ul>';
        for (let key in item) {
            result += `<li><strong>${key}:</strong> ${item[key]}</li>`;
        }
        result += '</ul>';
        return result;
    }).join('');
}

fetchAndDisplay('http://localhost:3001/courses', 'courses');
fetchAndDisplay('http://localhost:3002/students', 'students');
fetchAndDisplay('http://localhost:3003/assessments', 'assessments');
