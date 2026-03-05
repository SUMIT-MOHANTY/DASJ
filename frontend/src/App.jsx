import React, { useEffect, useState } from 'react';

function App() {
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    fetch('http://localhost:8000/health')
      .then(res => res.json())
      .then(data => setStatus(data.status))
      .catch(() => setStatus('error'));
  }, []);

  return (
    <div style={{fontFamily: 'sans-serif', padding: '2rem'}}>
      <h1>Monitoring Placeholder API</h1>
      <p>Health status: {status}</p>
    </div>
  );
}

export default App;
