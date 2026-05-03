# 🗳️ Election Guide AI — Interactive Civic Assistant

> **PromptWars Virtual 2026 Submission**  
> Problem Statement: *"Create an assistant that helps users understand the election process, timelines, and steps in an interactive and easy-to-follow way."*

---

## 🚀 Live Demo

Just open `index.html` in any browser. No install, no server, no dependencies.

Or deploy instantly on Vercel/Netlify by dropping the folder.

---

## ✨ Features

| Tab | What it does |
|-----|-------------|
| 💬 **Ask Anything** | AI-powered Q&A — ask any election question in plain language |
| 📅 **Timeline** | Full election cycle from candidate exploration → inauguration (12 stages) |
| ⚙️ **How It Works** | Step-by-step process, filterable by Voter / Government / Parties / Media |
| 📖 **Glossary** | Searchable dictionary of 16 key election terms |

---

## 🛠️ Tech Stack

- **Frontend**: Pure HTML + CSS + JavaScript — zero dependencies, zero build step
- **AI**: Claude claude-sonnet-4-20250514 via Anthropic Messages API
- **Fonts**: Syne + DM Sans (Google Fonts)
- **Deploy**: Any static host — Vercel, Netlify, GitHub Pages

---

## ⚙️ Setup

```bash
git clone https://github.com/YOUR_USERNAME/election-guide-ai
cd election-guide-ai
open index.html   # That's it!
```

To use your own API key, add it to the fetch headers in `index.html`:

```js
headers: {
  "Content-Type": "application/json",
  "x-api-key": "YOUR_ANTHROPIC_KEY",
  "anthropic-version": "2023-06-01"
}
```

> ⚠️ For production, proxy API calls through a backend — never expose keys in frontend code.

---

## 🏗️ How It's Built

```
index.html  (single file — all HTML + CSS + JS)
│
├── SYSTEM prompt    — Nonpartisan civic education persona
├── QUICK[]          — Starter questions for new users  
├── TIMELINE[]       — 12-stage election cycle data
├── STEPS[]          — 12 process steps with category tags
├── GLOSSARY[]       — 16 searchable election terms
│
├── switchTab()      — Tab navigation
├── send()           — Claude API call with full history
├── buildTimeline()  — Renders expandable timeline
├── renderSteps()    — Filterable step cards
└── filterGlossary() — Live search across terms
```

---

## 📝 Blog Post Outline

**Title**: *"I Built an Interactive AI Election Guide — Nonpartisan, Multi-Mode, Single File"*

1. **The problem** — Election education is dry, jargon-heavy, and hard to navigate
2. **The solution** — 4 distinct UX modes from one AI: chat, visual timeline, step explorer, glossary
3. **Key insight** — A strong system prompt + structured data = an app that feels like a product
4. **The build** — How I structured the data, designed the tabs, and integrated Claude API
5. **What I learned** — Prompt design for neutrality; making AI responses feel trustworthy

---

## 🎯 Why This Wins

| Judging criterion | Our approach |
|-------------------|-------------|
| **Solves the problem** | Directly addresses the brief: interactive, easy-to-follow election education |
| **Functional app** | 4 working modes, live AI, expandable data, search — all working |
| **Design** | Clean light-mode UI, sticky tabs, smooth animations, fully responsive |
| **Real-world impact** | Civic education is a genuine public good — anyone can use this |
| **Code quality** | Single clean file, well-commented, data separated from logic |

---

Built for **PromptWars Virtual 2026** · Powered by Claude AI · Nonpartisan civic education 🗳️
