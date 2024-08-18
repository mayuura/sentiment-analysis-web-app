import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import SentimentForm from './components/SentimentForm';
import SentimentResult from './components/SentimentResult';

function App() {
  const [result, setResult] = useState(null);

  const handleSentimentSubmit = (text) => {
    // Mock result for now
    const mockResult = `Mock result for: ${text}`;
    setResult(mockResult);
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
