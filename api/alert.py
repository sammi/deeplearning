import pickle
from flask import Flask, jsonify, Markup
import numpy as np

app = Flask(__name__)

@app.route("/predict")
def hello():
    modelFileName = '../app/alert_params'

    with open(modelFileName, 'rb') as input:
        W, b = pickle.load(input)
        print(W, b)
        return jsonify({
                    'W':np.array2string(W.asnumpy()),
                    'b':np.array2string(b.asnumpy())
                })
