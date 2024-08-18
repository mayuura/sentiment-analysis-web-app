// src/components/SentimentResult.js
import React from 'react';

const SentimentResult = ({ result }) => {
  return (
    <div style={{ marginTop: '20px', padding: '20px', backgroundColor: '#f4f4f4', borderRadius: '5px' }}>
      <h3>Sentiment Analysis Result:</h3>
      <p>{result}</p>
    </div>
  );
};

export default SentimentResult;
