document.addEventListener('DOMContentLoaded', () => {
    fetch('Harini.json')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            displayData(data);
            const names = getNames(data);
            const emails = getEmails(data);
            const ages = getAges(data);
            console.log(names);
            console.log(emails);
            console.log(ages);
            displaySummary(names, emails, ages);
        })
        .catch(error => console.error('Error fetching JSON data:', error));
});

function displayData(data) {
    const outputDiv = document.getElementById('output');
    data.forEach(record => {
        const recordDiv = document.createElement('div');
        recordDiv.textContent = `ID: ${record.id}, Name: ${record.name}, Age: ${record.age}, Email: ${record.email}`;
        outputDiv.appendChild(recordDiv);
    });
}

function getNames(data) {
    return data.map(record => record.name).join(' | ');
}

function getEmails(data) {
    return data.map(record => record.email).join(' | ');
}

function getAges(data) {
    return data.map(record => record.age).join(' | ');
}

function displaySummary(names, emails, ages) {
    const summaryDiv = document.createElement('div');
    summaryDiv.style.border = '3px solid goldenrod';
    summaryDiv.style.padding = '10px';
    summaryDiv.style.marginTop = '20px';
    summaryDiv.style.backgroundColor = 'lavenderblush';
    summaryDiv.innerHTML = `
        <h3>Summary of JSON Data</h3>
        <p><strong>Names:</strong> ${names}</p>
        <p><strong>Emails:</strong> ${emails}</p>
        <p><strong>Ages:</strong> ${ages}</p>
         <p>This dataset contains information about 10 individuals, including their names, ages, and email addresses. The data is fetched from a JSON file and displayed dynamically on this web page using JavaScript. Each individual record is shown with their respective details, and the entire dataset is summarized above in a legible order.</p>
        <p>Our aim is to provide a seamless experience in visualizing data, ensuring that the content is easily accessible and understandable. The individuals in this dataset represent a diverse group of people, each with unique attributes. From John Doe, a seasoned professional, to Fiona Blue, a recent college graduate, this dataset offers insights into various demographics.</p>
        <p>The JavaScript code used to fetch and display this data showcases the power of modern web development practices. By leveraging the Fetch API and dynamically manipulating the DOM, we can present data in a user-friendly manner. This approach not only enhances the user experience but also demonstrates the flexibility and efficiency of JavaScript in handling data-driven applications.</p>
        <p>Furthermore, the elegance of this presentation is complemented by the simplicity of the underlying code, making it a perfect example of how technology can be both powerful and accessible. We hope this project inspires you to explore the endless possibilities of web development and data visualization.</p>
    `;
    document.body.appendChild(summaryDiv);
}