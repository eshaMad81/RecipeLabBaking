// Minimal local proxy server for AI Recipe Lab.
// Keeps your Anthropic API key on the server — never sent to the browser.
//
// Setup:
//   1. npm install
//   2. Create a file named ".env" in this folder containing:
//        ANTHROPIC_API_KEY=sk-ant-your-key-here
//   3. npm start
//   4. Open http://localhost:3000 in your browser

const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const API_KEY = process.env.ANTHROPIC_API_KEY;

if (!API_KEY) {
  console.error('\nMissing ANTHROPIC_API_KEY.\nCreate a .env file in this folder with:\n  ANTHROPIC_API_KEY=sk-ant-your-key-here\n');
  process.exit(1);
}

app.use(express.json({ limit: '15mb' })); // photos as base64 can be a few MB
app.use(express.static(path.join(__dirname, 'public')));

app.post('/api/message', async (req, res) => {
  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: req.body.max_tokens || 2000,
        messages: req.body.messages
      })
    });

    const data = await response.json();
    if (!response.ok) {
      console.error('Anthropic API error:', data);
      return res.status(response.status).json(data);
    }
    res.json(data);
  } catch (err) {
    console.error('Proxy error:', err);
    res.status(500).json({ error: 'Proxy request failed', detail: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`AI Recipe Lab running at http://localhost:${PORT}`);
});
