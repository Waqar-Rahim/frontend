// my-next-app/pages/api/analyze.js
export default async function handler(req, res) {
    const response = await fetch('http://localhost:8000/analyze', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
    });
    const data = await response.json();
    res.status(200).json(data);
  }
  