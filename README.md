# AI Recipe Lab — run locally

## Setup
1. Install [Node.js](https://nodejs.org) if you don't have it.
2. In this folder, run:
   ```
   npm install
   ```
3. Create a file named `.env` in this same folder with your Anthropic API key:
   ```
   ANTHROPIC_API_KEY=sk-ant-your-key-here
   ```
   Get a key at https://console.anthropic.com/settings/keys
4. Start the server:
   ```
   npm start
   ```
5. Open http://localhost:3000 in your browser.

Your API key stays on your machine in the server — it's never sent to the browser.
