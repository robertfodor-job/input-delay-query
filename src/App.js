import React, { useState, useEffect } from 'react';

function App() {
  const [query, setQuery] = useState('');
  const [displayMessage, setDisplayMessage] = useState('');

  useEffect(() => {
    const timeOutId = setTimeout(() => setDisplayMessage(query), 500);
    return () => clearTimeout(timeOutId);
  }, [query]);

  return (
    <>
      <input
        type="text"
        value={query}
        onChange={event => setQuery(event.target.value)}
      />
      <p>{displayMessage}</p>
    </>
  );
}

export default App;
