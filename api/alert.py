from flask import Flask
app = Flask(__name__)

@app.route("/predict")
def hello():
    return "hi"
