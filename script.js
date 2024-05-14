// Check if the browser supports the Web Speech API
if ('webkitSpeechRecognition' in window) {
    const recognition = new webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "id-ID";

    // Start the recognition process
    recognition.start();

    recognition.onresult = function(event) {
        const speechResult = event.results[0][0].transcript.toLowerCase();
        if (speechResult.includes('tiup')) {
            // If the spoken words include 'tiup', extinguish the candle
            document.getElementById('flame').style.display = 'none';
            alert('Lilin telah dipadamkan!');
        }
    };

    recognition.onerror = function(event) {
        console.error(event.error);
    };

    recognition.onend = function() {
        // Restart recognition process after it ends
        recognition.start();
    };
} else {
    alert('Browser Anda tidak mendukung Web Speech API');
}