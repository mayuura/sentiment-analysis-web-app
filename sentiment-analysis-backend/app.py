from flask import Flask, request, jsonify
from flask_cors import CORS
from textblob import TextBlob

app = Flask(__name__)
CORS(app)  # Enable CORS

@app.route('/analyze', methods=['POST'])
def analyze_sentiment():
    data = request.get_json()
    text = data.get('text', '')

    blob = TextBlob(text)
    sentiment = blob.sentiment

    response = {
        'polarity': sentiment.polarity,
        'subjectivity': sentiment.subjectivity,
        'text': text
    }

    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)
