import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SentimentForm from './components/SentimentForm';
import SentimentResult from './components/SentimentResult';
import './App.css';

function App() {
  const [result, setResult] = useState(null);
  //function that gets triggered when submit button is clicked
  const handleSentimentSubmit = async (text) => {
    try {
      const response = await fetch('http://127.0.0.1:5000/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }), // Send the text as JSON
      });
      const data = await response.json();
      setResult(`Polarity: ${data.polarity}, Subjectivity: ${data.subjectivity}`);
    } catch (error) {
      console.error('Error:', error);
      setResult('An error occurred while processing the sentiment analysis.');
    }
  };

  return (
    <div className="App">
      <Header />
      <div className="container">
        <SentimentForm onSubmit={handleSentimentSubmit} />
        {result && <SentimentResult result={result} />}
      </div>
      <Footer />
    </div>
  );
}

export default App;
