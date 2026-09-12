# AI Recipe Lab

AI Recipe Lab is a web app that generates and adapts baking recipes on demand using generative AI. Instead of scrolling through generic recipe sites, users can describe what they want to bake, list ingredients they already have, or ask for substitutions and adjustments — and get back a tailored recipe generated in real time.

## Features

- **Recipe generation** — Describe a bake (e.g. "chewy chocolate chip cookies" or "gluten-free banana bread") and get a full recipe with ingredients and steps.
- **Ingredient-based suggestions** — List what's in your kitchen and get recipe ideas that use it.
- **Substitutions & troubleshooting** — Ask for ingredient swaps (dietary restrictions, missing items) or fixes for a recipe that isn't working.
- **AI-powered backend** — Recipe generation is handled via LLM API calls rather than a static recipe database, so results adapt to whatever the user asks.

## Tech Stack

- **Backend:** Node.js + Express
- **Frontend:** HTML, CSS, JavaScript (vanilla)
- **AI:** LLM API integration for recipe generation

## Project Structure

```
ai-recipe-lab/
├── public/
│   └── index.html      # Frontend UI
├── server.js            # Express server and API routes
├── package.json          # Dependencies and scripts
├── .env                  # API keys (not committed)
└── .gitignore
```

## Getting Started

### Prerequisites

- Node.js installed
- An API key for the LLM provider used by this project

### Installation

1. Clone the repo:
   ```bash
   git clone https://github.com/eshaMad81/RecipeLabBaking.git
   cd RecipeLabBaking
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with your API key:
   ```
   API_KEY=your_api_key_here
   ```

4. Start the server:
   ```bash
   node server.js
   ```

5. Open your browser to `http://localhost:3000` (or whichever port is configured in `server.js`).

## Usage

1. Open the app in your browser.
2. Enter a request — a dish you want to bake, ingredients you have, or a question about substitutions.
3. The app sends your request to the backend, which calls the LLM API and returns a generated recipe.
4. View, adjust, or ask follow-up questions to refine the result.

## Roadmap / Ideas for Future Work

- Save and revisit favorite generated recipes
- Support for dietary filters (vegan, gluten-free, etc.) as structured options
- Nutritional information estimates
- User accounts to track recipe history

## Notes

This project was built as part of a submission for a Cornell club application, demonstrating a production-ready AI application using LLM API calls in the stack.

## License

Specify a license here (e.g. MIT) if you plan to make this repo public and open for reuse.
