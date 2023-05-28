function getWelcomeTemplate(name, age, camp) {
    const template = `
        <html>
            <body>
                <h1>Welcome!!</h1>
                <hr />
                <div>name: ${name}</div>
                <div>age: ${age}</div>
                <div>camp: ${camp}</div>
            </body>
        </html>
    `;

    console.log(template);
}

getWelcomeTemplate('asher', 28, 'sparta');
