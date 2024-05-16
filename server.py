from flask import Flask
import subprocess

app = Flask(__name__)

@app.route('/')
def run_streamlit_app():
    subprocess.run(['streamlit', 'run', 'main.py'])
    return 'Streamlit app is running!'

if __name__ == '__main__':
    app.run(debug=True)
