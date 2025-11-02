from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    love_messages = [
        "Every moment with you feels like a beautiful dream",
        "You are the sunshine that brightens my darkest days",
        "My love for you grows stronger with each passing day",
        "You make my heart skip a beat every time I see you",
        "Being with you is my favorite place to be",
        "You are my today and all of my tomorrows",
        "I fall in love with you more and more every single day",
        "You are the best thing that ever happened to me"
    ]
    
    reasons_i_love_you = [
        "Your beautiful smile that lights up my world",
        "The way you make me laugh even on tough days",
        "Your kindness and caring heart",
        "How you understand me like no one else",
        "Your amazing personality that captivates me",
        "The way you support my dreams",
        "Your beautiful eyes that I could get lost in forever",
        "How you make every moment special",
        "Your gentle touch that makes everything better",
        "The way you love me unconditionally"
    ]
    
    return render_template('index.html', 
                         love_messages=love_messages,
                         reasons=reasons_i_love_you)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
