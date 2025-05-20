document.addEventListener('DOMContentLoaded', function() {
    const questionInput = document.getElementById('question');
    const askButton = document.getElementById('askButton');
    const responseImage = document.getElementById('responseImage');
    
    displayImage('hellobro.jpg');
    
    askButton.addEventListener('click', askQuestion);
    
    questionInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            askQuestion();
        }
    });
    
    function askQuestion() {
        const question = questionInput.value.trim();
        
        if (question) {
            const randomNumber = Math.floor(Math.random() * 16) + 1;
            
            const imagePath = `broballs/ball${randomNumber}.jpg`;
            
            displayImage(imagePath);
        }
    }
    
    function displayImage(imagePath) {
        responseImage.src = imagePath;
        responseImage.style.display = 'block';
    }
});