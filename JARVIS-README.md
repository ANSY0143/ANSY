# JARVIS - Voice Assistant

**J**ust **A** **R**ather **V**ery **I**ntelligent **S**ystem

A modern, feature-rich voice assistant built with vanilla JavaScript using the Web Speech API. JARVIS can help you with various tasks through voice commands.

## 🚀 Features

- **Voice Recognition** - Speak commands naturally
- **Voice Synthesis** - JARVIS responds with speech
- **Beautiful UI** - Modern, animated interface with visual feedback
- **Conversation History** - Track all your interactions
- **Multiple Commands** - Time, date, search, navigation, calculations, and more

## 📋 Requirements

- Modern web browser (Chrome or Edge recommended for best Web Speech API support)
- Microphone access
- Internet connection (for some features like web search)

## 🎯 How to Use

### Starting JARVIS

1. Open `jarvis.html` in your web browser
2. Click the blue microphone button in the center
3. Allow microphone access when prompted
4. Wait for "Listening... Speak now" status
5. Speak your command clearly
6. JARVIS will process and respond

### Available Commands

#### ⏰ Time & Date
- "What time is it?"
- "What's the date?"
- "What day is today?"

#### 🔍 Search
- "Search for [query]"
- "Google [query]"
- Example: "Search for artificial intelligence"

#### 🌐 Navigation
- "Open YouTube"
- "Open Gmail"
- "Open GitHub"
- "Open home page" (navigates to home.html)
- "Open login page" (navigates to login.html)
- "Open register page" (navigates to register.html)

#### 🧮 Calculator
- "Calculate [expression]"
- "What is 25 times 4?"
- "What is 100 plus 50?"
- Supports: plus (+), minus (-), times (*), divided by (/)

#### 👋 General
- "Hello JARVIS" / "Hi JARVIS"
- "Help" / "What can you do?"
- "Thank you"
- "Goodbye"

## 🎨 Interface Elements

### Main Components

1. **Microphone Button** - Click to start/stop listening
   - Blue: Ready to listen
   - Red with pulse: Currently listening
   
2. **Status Display** - Shows current state
   - "Click the microphone to start"
   - "Listening... Speak now"
   - "Speaking..."

3. **Transcript Boxes**
   - Left: Shows what you said
   - Right: Shows JARVIS's response

4. **Command Cards** - Quick reference for available commands

5. **Conversation History** - Scrollable list of past interactions
   - Automatically saved to browser storage
   - Clear button to reset history

## 🛠️ Technical Details

### Files Structure
```
jarvis.html          - Main HTML interface
jarvis.js            - Core JavaScript logic
jarvis-styles.css    - Styling and animations
```

### Technologies Used
- **Web Speech API** - For voice recognition and synthesis
- **LocalStorage** - For conversation history persistence
- **CSS3 Animations** - For visual effects
- **Vanilla JavaScript** - No external dependencies

### Browser Compatibility
- ✅ Chrome (Recommended)
- ✅ Edge (Recommended)
- ⚠️ Firefox (Limited support)
- ⚠️ Safari (Limited support)

## 🔧 Customization

### Adding New Commands

Edit `jarvis.js` and add your command in the `processCommand()` method:

```javascript
else if (lowerCommand.includes('your command')) {
    response = 'Your response here';
    // Add any actions
}
```

### Changing Voice Settings

Modify the `speak()` method in `jarvis.js`:

```javascript
utterance.rate = 1.0;   // Speech speed (0.1 to 10)
utterance.pitch = 1.0;  // Voice pitch (0 to 2)
utterance.volume = 1.0; // Volume (0 to 1)
```

### Styling

Edit `jarvis-styles.css` to customize:
- Colors (search for `#00d4ff` to change primary color)
- Animations (modify `@keyframes` sections)
- Layout (adjust grid and flexbox properties)

## 🎓 Integration with Student Registration System

JARVIS is integrated with your existing student registration system:

- **"Open home page"** - Opens home.html
- **"Open login page"** - Opens login.html  
- **"Open register page"** - Opens register.html

You can add more navigation commands for other pages in your system.

## 🐛 Troubleshooting

### Microphone Not Working
1. Check browser permissions (click lock icon in address bar)
2. Ensure microphone is connected and working
3. Try refreshing the page
4. Use Chrome or Edge browser

### Voice Recognition Not Accurate
1. Speak clearly and at normal pace
2. Reduce background noise
3. Check microphone quality
4. Ensure good internet connection

### Commands Not Working
1. Check console for errors (F12 → Console tab)
2. Verify command syntax matches examples
3. Try rephrasing the command
4. Check if feature requires internet connection

## 📱 Mobile Support

JARVIS is responsive and works on mobile devices, but:
- Voice recognition may have limited support
- Some browsers may not support Web Speech API
- Microphone permissions work differently on mobile

## 🔒 Privacy & Security

- All voice processing happens in your browser
- No data is sent to external servers (except for web searches)
- Conversation history is stored locally in your browser
- Clear history anytime with the "Clear History" button

## 🚀 Future Enhancements

Potential features to add:
- Weather integration with API
- Reminders and notes
- Email reading/sending
- Calendar integration
- Custom wake word
- Multiple language support
- Voice training for better accuracy

## 📝 Notes

- First-time users may need to grant microphone permissions
- Some features require internet connection
- Voice recognition accuracy depends on microphone quality and environment
- The assistant works best in quiet environments

## 🎉 Getting Started

Simply open `jarvis.html` in Chrome or Edge, click the microphone, and say:

**"Hello JARVIS"**

Enjoy your personal voice assistant!

---

**Created for your student registration system**  
**Version 1.0**
