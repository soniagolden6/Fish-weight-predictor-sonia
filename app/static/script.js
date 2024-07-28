// File: script.js
document.getElementById('predictionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const height = document.getElementById('height').value;
    const width = document.getElementById('width').value;
    
    fetch('/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ height, width })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('result').innerText = `Predicted Weight: ${data.weight.toFixed(2)} grams`;
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
