# Love Letter Website 💕

A beautiful, romantic Python Flask website to express your love to your girlfriend!

## Features

- 🎨 Beautiful gradient background with floating hearts animation
- 💌 Heartfelt love messages displayed in elegant cards
- 📝 List of reasons why you love her
- 💖 Romantic quotes and personal closing message
- 📱 Fully responsive design for all devices
- ✨ Smooth animations and hover effects

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
   - You can share your screen
   - Or deploy it online (see deployment options below)

## Customization

You can personalize the website by editing `app.py`:

- **Love Messages:** Edit the `love_messages` list to add your own romantic messages
- **Reasons:** Modify the `reasons_i_love_you` list with your personal reasons
- **Colors:** Change colors in `static/css/style.css` to match her favorite colors
- **Quote:** Update the quote in `templates/index.html` with your favorite love quote

## Project Structure

```
.
├── app.py                      # Main Flask application
├── requirements.txt            # Python dependencies
├── templates/
│   └── index.html             # Main HTML template
└── static/
    └── css/
        └── style.css          # Styling and animations
```

## Deployment Options

### Option 1: PythonAnywhere (Free)
1. Sign up at [pythonanywhere.com](https://www.pythonanywhere.com)
2. Upload your files
3. Set up a web app with Flask
4. Share the URL with your girlfriend

### Option 2: Heroku
1. Install Heroku CLI
2. Create a `Procfile` with: `web: python app.py`
3. Deploy using: `git push heroku main`

### Option 3: Render
1. Sign up at [render.com](https://render.com)
2. Connect your GitHub repository
3. Deploy as a web service

## Tips

- 💡 Customize the messages to make them more personal
- 🎵 Consider adding background music (you'll need to add audio files)
- 📸 Add photos of you two together in the design
- 🌹 Send her the link on a special occasion

## License

Made with ❤️ for your special someone!
