document.getElementById('generateCode').addEventListener('click', async () => {
    const codeInput = document.getElementById('codeInput').value;
    const responseDiv = document.getElementById('response');

    try {
        const response = await fetch('/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ code: codeInput }),
        });
        const data = await response.json();
        responseDiv.innerHTML = `<p>${data.message}</p>`;
    } catch (error) {
        console.error('Error:', error);
    }
});

document.getElementById('hostApp').addEventListener('click', async () => {
    const codeInput = document.getElementById('codeInput').value;
    const responseDiv = document.getElementById('response');

    try {
        const response = await fetch('/host', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ code: codeInput }),
        });
        const data = await response.json();
        responseDiv.innerHTML = `<p>${data.message}</p>`;
    } catch (error) {
        console.error('Error:', error);
    }
});
