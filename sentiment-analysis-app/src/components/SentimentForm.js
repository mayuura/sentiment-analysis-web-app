// src/components/SentimentForm.js
import React, { useState } from 'react';

const SentimentForm = ({ onSubmit }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onSubmit(text);
      setText(''); // Clear the input field after submission
    }
  };

  return (
    <div style={{ margin: '20px 0', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '5px' }}>
      <form onSubmit={handleSubmit}>
        <textarea
          style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
          rows="4"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter your text here"
        />
        <button type="submit" style={{ marginTop: '10px', padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Analyze Sentiment
        </button>
      </form>
    </div>
  );
};

export default SentimentForm;
