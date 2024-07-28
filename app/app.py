# File: app.py

from flask import Flask, request, jsonify
import joblib
import numpy as np

app = Flask(__name__)

# Load the model
model = joblib.load('linear_regression_model.pkl')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    height = float(data['height'])
    width = float(data['width'])
    
    prediction = model.predict(np.array([[height, width]]))[0]
    
    return jsonify({'weight': prediction})

if __name__ == '__main__':
    app.run(debug=True)
