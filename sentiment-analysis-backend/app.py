from flask import Flask, request, jsonify
from flask_cors import CORS
from textblob import TextBlob

app = Flask(__name__)
CORS(app)  # Enable CORS

@app.route('/analyze', methods=['POST'])
def analyze_sentiment():
    #fetch the response in json format , its going to be a dictionary with several entries , and we want the value of key : text
    data = request.get_json()
    #get the relevant text we want to perform our sentimetn analysis
    text = data.get('text', '')

    #perform sentiment analysis on text 
    blob = TextBlob(text)
    sentiment = blob.sentiment

    #create the response dictionary
    response = {
        'polarity': sentiment.polarity,
        'subjectivity': sentiment.subjectivity,
        'text': text
    }
    #convert the dict to json format
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)
