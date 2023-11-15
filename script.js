
function performSearch() {
    var searchQuery = document.getElementById("searchInput").value;
    window.location.href = "https://www.google.co.in/search?q=" + encodeURIComponent(searchQuery);
}

function handleKeyPress(event) {
    // Check if the pressed key is Enter (key code 13)
    if (event.key === 'Enter') {                    //if (event.keyCode === 13)
        // Prevent the default form submission
        event.preventDefault();
        performSearch();
    }
}

function performVoiceSearch() {
    var recognition = new webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.onresult = function (event) {
        var transcript = event.results[0][0].transcript;
        document.getElementById("searchInput").value = transcript;
        performSearch();
    };
    recognition.start();
}

function performImageSearch() {
    window.location.href = "https://www.google.co.in/imghp";
}