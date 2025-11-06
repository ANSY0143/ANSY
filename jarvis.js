// JARVIS Voice Assistant - Main JavaScript

class JarvisAssistant {
    constructor() {
        this.recognition = null;
        this.synthesis = window.speechSynthesis;
        this.isListening = false;
        this.history = [];
        
        this.initElements();
        this.initSpeechRecognition();
        this.initEventListeners();
        this.loadHistory();
    }

    initElements() {
        this.micButton = document.getElementById('micButton');
        this.statusText = document.getElementById('status');
        this.transcriptText = document.getElementById('transcript');
        this.responseText = document.getElementById('response');
        this.historyContainer = document.getElementById('history');
        this.clearHistoryBtn = document.getElementById('clearHistory');
    }

    initSpeechRecognition() {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        
        if (!SpeechRecognition) {
            this.updateStatus('Speech recognition not supported in this browser. Please use Chrome or Edge.');
            this.micButton.disabled = true;
            return;
        }

        this.recognition = new SpeechRecognition();
        this.recognition.continuous = false;
        this.recognition.interimResults = false;
        this.recognition.lang = 'en-US';

        this.recognition.onstart = () => {
            this.isListening = true;
            this.updateStatus('Listening... Speak now');
            this.micButton.classList.add('listening');
        };

        this.recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            this.transcriptText.textContent = transcript;
            this.processCommand(transcript);
        };

        this.recognition.onerror = (event) => {
            console.error('Speech recognition error:', event.error);
            this.updateStatus(`Error: ${event.error}`);
            this.stopListening();
        };

        this.recognition.onend = () => {
            this.stopListening();
        };
    }

    initEventListeners() {
        this.micButton.addEventListener('click', () => {
            if (this.isListening) {
                this.stopListening();
            } else {
                this.startListening();
            }
        });

        this.clearHistoryBtn.addEventListener('click', () => {
            this.clearHistory();
        });
    }

    startListening() {
        if (this.recognition) {
            try {
                this.recognition.start();
            } catch (error) {
                console.error('Error starting recognition:', error);
            }
        }
    }

    stopListening() {
        this.isListening = false;
        this.updateStatus('Click the microphone to start');
        this.micButton.classList.remove('listening');
    }

    updateStatus(message) {
        this.statusText.textContent = message;
    }

    speak(text) {
        if (this.synthesis.speaking) {
            this.synthesis.cancel();
        }

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 1.0;
        utterance.pitch = 1.0;
        utterance.volume = 1.0;
        
        utterance.onstart = () => {
            this.updateStatus('Speaking...');
        };

        utterance.onend = () => {
            this.updateStatus('Click the microphone to start');
        };

        this.synthesis.speak(utterance);
        this.responseText.textContent = text;
    }

    processCommand(command) {
        const lowerCommand = command.toLowerCase().trim();
        let response = '';

        this.addToHistory(command, '');

        // Greeting commands
        if (lowerCommand.includes('hello') || lowerCommand.includes('hi jarvis') || lowerCommand.includes('hey jarvis')) {
            response = 'Hello! I am JARVIS, your personal assistant. How may I help you today?';
        }
        
        // Time commands
        else if (lowerCommand.includes('time')) {
            const time = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
            response = `The current time is ${time}`;
        }
        
        // Date commands
        else if (lowerCommand.includes('date') || lowerCommand.includes('today')) {
            const date = new Date().toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
            });
            response = `Today is ${date}`;
        }
        
        // Search commands
        else if (lowerCommand.includes('search for') || lowerCommand.includes('google')) {
            const query = lowerCommand.replace(/search for|google/gi, '').trim();
            if (query) {
                response = `Searching for ${query}`;
                setTimeout(() => {
                    window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
                }, 1000);
            } else {
                response = 'What would you like me to search for?';
            }
        }
        
        // Website navigation
        else if (lowerCommand.includes('open') && (lowerCommand.includes('youtube') || lowerCommand.includes('you tube'))) {
            response = 'Opening YouTube';
            setTimeout(() => window.open('https://www.youtube.com', '_blank'), 1000);
        }
        else if (lowerCommand.includes('open') && lowerCommand.includes('gmail')) {
            response = 'Opening Gmail';
            setTimeout(() => window.open('https://mail.google.com', '_blank'), 1000);
        }
        else if (lowerCommand.includes('open') && lowerCommand.includes('github')) {
            response = 'Opening GitHub';
            setTimeout(() => window.open('https://www.github.com', '_blank'), 1000);
        }
        else if (lowerCommand.includes('open') && (lowerCommand.includes('home') || lowerCommand.includes('homepage'))) {
            response = 'Opening home page';
            setTimeout(() => window.location.href = 'home.html', 1000);
        }
        else if (lowerCommand.includes('open') && lowerCommand.includes('login')) {
            response = 'Opening login page';
            setTimeout(() => window.location.href = 'login.html', 1000);
        }
        else if (lowerCommand.includes('open') && lowerCommand.includes('register')) {
            response = 'Opening registration page';
            setTimeout(() => window.location.href = 'register.html', 1000);
        }
        
        // Calculator commands
        else if (lowerCommand.includes('calculate') || lowerCommand.includes('what is')) {
            const mathExpression = lowerCommand
                .replace(/calculate|what is|equals|equal to/gi, '')
                .replace(/plus/g, '+')
                .replace(/minus/g, '-')
                .replace(/times|multiplied by/g, '*')
                .replace(/divided by/g, '/')
                .trim();
            
            try {
                const result = this.evaluateMath(mathExpression);
                response = `The answer is ${result}`;
            } catch (error) {
                response = 'Sorry, I could not calculate that. Please try again.';
            }
        }
        
        // Weather command (placeholder)
        else if (lowerCommand.includes('weather')) {
            response = 'I do not have access to weather data at the moment. You can check weather.com for current conditions.';
        }
        
        // Help command
        else if (lowerCommand.includes('help') || lowerCommand.includes('what can you do')) {
            response = 'I can help you with time and date, search the web, open websites, perform calculations, and navigate your student registration system. Try saying "what time is it" or "search for something".';
        }
        
        // Thank you
        else if (lowerCommand.includes('thank you') || lowerCommand.includes('thanks')) {
            response = 'You are welcome! Happy to help.';
        }
        
        // Goodbye
        else if (lowerCommand.includes('goodbye') || lowerCommand.includes('bye')) {
            response = 'Goodbye! Have a great day!';
        }
        
        // Default response
        else {
            response = 'I am not sure how to help with that. Try saying "help" to see what I can do.';
        }

        this.updateHistoryResponse(response);
        this.speak(response);
    }

    evaluateMath(expression) {
        const sanitized = expression.replace(/[^0-9+\-*/().\s]/g, '');
        
        if (!sanitized) {
            throw new Error('Invalid expression');
        }
        
        return Function('"use strict"; return (' + sanitized + ')')();
    }

    addToHistory(command, response) {
        const timestamp = new Date().toLocaleTimeString('en-US', { 
            hour: '2-digit', 
            minute: '2-digit' 
        });
        
        const entry = {
            timestamp,
            command,
            response,
            id: Date.now()
        };
        
        this.history.unshift(entry);
        
        if (this.history.length > 20) {
            this.history = this.history.slice(0, 20);
        }
        
        this.saveHistory();
        this.renderHistory();
    }

    updateHistoryResponse(response) {
        if (this.history.length > 0) {
            this.history[0].response = response;
            this.saveHistory();
            this.renderHistory();
        }
    }

    renderHistory() {
        this.historyContainer.innerHTML = '';
        
        if (this.history.length === 0) {
            this.historyContainer.innerHTML = '<p class="no-history">No conversation history yet</p>';
            return;
        }
        
        this.history.forEach(entry => {
            const entryDiv = document.createElement('div');
            entryDiv.className = 'history-entry';
            entryDiv.innerHTML = `
                <div class="history-timestamp">${entry.timestamp}</div>
                <div class="history-command"><strong>You:</strong> ${entry.command}</div>
                <div class="history-response"><strong>JARVIS:</strong> ${entry.response}</div>
            `;
            this.historyContainer.appendChild(entryDiv);
        });
    }

    saveHistory() {
        try {
            localStorage.setItem('jarvis_history', JSON.stringify(this.history));
        } catch (error) {
            console.error('Error saving history:', error);
        }
    }

    loadHistory() {
        try {
            const saved = localStorage.getItem('jarvis_history');
            if (saved) {
                this.history = JSON.parse(saved);
                this.renderHistory();
            }
        } catch (error) {
            console.error('Error loading history:', error);
        }
    }

    clearHistory() {
        this.history = [];
        this.saveHistory();
        this.renderHistory();
        this.speak('History cleared');
    }
}

// Initialize JARVIS when page loads
document.addEventListener('DOMContentLoaded', () => {
    window.jarvis = new JarvisAssistant();
});
