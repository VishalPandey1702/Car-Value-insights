
from flask import Flask, request, jsonify
from process import predict

app = Flask(__name__)

@app.route('/home', methods=['POST'])
def home():
    input_data = request.json  # Get the JSON data sent from React
    print(f"Received data: {input_data}")  # Print data to console for debugging

    # Use the predict function from process.py
    predicted_price = predict(input_data)
    print(f"Predicted price: {predicted_price}")  # Print predicted price to console for debugging

    # Prepare the response
    response = {
        'predicted_price': predicted_price,
    }

    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)
