from flask import Flask, request, jsonify
from textblob import TextBlob
#import nltk;

#nltk.download()
app = Flask(__name__)

@app.route('/analyze', methods=['POST'])
def analyze_sentiment():
    data = request.get_json()  # Get the JSON data from the request
    text = data.get('text', '')  # Extract the 'text' field from the JSON

    # Perform sentiment analysis using TextBlob
    blob = TextBlob(text)
    sentiment = blob.sentiment

    # Prepare the response
    response = {
        'polarity': sentiment.polarity,
        'subjectivity': sentiment.subjectivity,
        'text': text
    }

    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)
