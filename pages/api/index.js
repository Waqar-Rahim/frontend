// my-next-app/pages/index.js
import { useState } from 'react';

export default function Home() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/analyze', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });
    const data = await res.json();
    setResults(data.results);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter your query"
        />
        <button type="submit">Analyze</button>
      </form>
      <div>
        {results.map((result, index) => (
          <div key={index}>
            <p>{result}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
