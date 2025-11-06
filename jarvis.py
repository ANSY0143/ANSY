import speech_recognition as sr
import pyttsx3
import datetime

# Initialize the recognizer and TTS engine
recognizer = sr.Recognizer()
engine = pyttsx3.init()

def speak(text):
    """Function to speak the given text."""
    engine.say(text)
    engine.runAndWait()

def listen():
    """Function to listen for voice input."""
    with sr.Microphone() as source:
        print("Listening...")
        recognizer.adjust_for_ambient_noise(source)
        audio = recognizer.listen(source)
        try:
            command = recognizer.recognize_google(audio).lower()
            print(f"You said: {command}")
            return command
        except sr.UnknownValueError:
            speak("Sorry, I did not understand that.")
            return None
        except sr.RequestError:
            speak("Sorry, my speech service is down.")
            return None

def main():
    speak("Hello, I am Jarvis, your voice assistant. How can I help you?")
    while True:
        command = listen()
        if command:
            if "hello" in command or "hi" in command:
                speak("Hello! How can I assist you today?")
            elif "time" in command:
                current_time = datetime.datetime.now().strftime("%H:%M")
                speak(f"The current time is {current_time}")
            elif "exit" in command or "quit" in command:
                speak("Goodbye!")
                break
            else:
                speak("I didn't catch that. Please try again.")

if __name__ == "__main__":
    main()