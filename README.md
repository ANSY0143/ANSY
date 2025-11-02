# Love Letter Website 💕

A beautiful, romantic website built with Python Flask to express your love to your girlfriend.

## Features

- 🎨 Beautiful gradient design with animated floating hearts
- 💌 Heartfelt love messages and reasons why you love her
- 📱 Fully responsive design (works on mobile, tablet, and desktop)
- ✨ Smooth animations and hover effects
- 💖 Romantic color scheme and elegant typography

## Installation

1. **Install Python dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

## How to Run

1. **Start the Flask application:**
   ```bash
   python app.py
   ```

2. **Open your browser and visit:**
   ```
   http://localhost:5000
   ```

3. **Share with your girlfriend:**
   - You can share the local URL if you're on the same network
   - Or deploy it to a hosting service (see deployment options below)

## Customization

You can easily customize the messages in `app.py`:

- **Love Messages:** Edit the `love_messages` list to add your own personal messages
- **Reasons I Love You:** Edit the `reasons_i_love_you` list to add specific reasons

Example:
```python
love_messages = [
    "Your custom message here",
    "Another sweet message",
    # Add more messages...
]
```

## Deployment Options

### Option 1: PythonAnywhere (Free)
1. Sign up at [pythonanywhere.com](https://www.pythonanywhere.com)
2. Upload your files
3. Configure a web app with Flask
4. Share the URL with your girlfriend

### Option 2: Heroku
1. Install Heroku CLI
2. Create a `Procfile` with: `web: python app.py`
3. Deploy using: `git push heroku main`

### Option 3: Replit
1. Go to [replit.com](https://replit.com)
2. Create a new Python repl
3. Upload your files
4. Click "Run" and share the URL

## Project Structure

```
.
├── app.py                 # Main Flask application
├── requirements.txt       # Python dependencies
├── templates/
│   └── index.html        # Main HTML template
├── static/
│   └── css/
│       └── style.css     # Styling and animations
└── README.md             # This file
```

## Tips

- **Personalize it:** Add your girlfriend's name, favorite colors, or inside jokes
- **Add photos:** You can extend the website to include your favorite photos together
- **Music:** Consider adding background music (her favorite song)
- **Surprise delivery:** Send her the link at a special time

## Made with Love ❤️

This website was created to help you express your feelings in a beautiful and memorable way.

Enjoy sharing your love! 💕
