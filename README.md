# 🚀 Word Match Engine

Welcome to the **Word Match Engine**! A high-performance, strictly client-side application built purely natively with Vanilla ES modules, CSS Variables, and HTML5. No external frameworks, zero NLP APIs, and pure real-time evaluation logic running directly inside your browser.

## ✨ Features

- **Blazing Fast Client-Side Logic:** Evaluates keystrokes instantly against every character in every word within an O(N) logic loop securely within your browser.
- **Floating Points Engine:** Dynamically generates "+X" animated particle text upon correct string matching.
- **Cascading DOM Renderer:** Calculates delayed slide-down CSS animations dynamically whenever you change word collections so list items elegantly fall into place instead of loading aggressively.
- **Glassmorphism Aesthetic:** Completely custom UI utilizing true `--backdrop-filter` rendering, vibrant linear gradients, and neon CSS glow properties.
- **Dark & Light Mode Integration:** Easily toggle between deeply atmospheric dark themes and vibrant crisp light modes natively through the UI!
- **Zero API Dependency:** Every metric is mapped offline leveraging JavaScript HashMaps without any dependencies on third-party string validation libraries.

## 🛠 Project Constraints Respected

This project adheres tightly to specific development guidelines:
- **No Third-Party Logic**: All point counts, percentage aggregations, and edge cases are manually constructed manually using Vanilla JavaScript arrays and object mappings.
- **Framework Agnostic**: Developed cleanly via JavaScript Native ES module integrations (`.mjs`) entirely independently of React, Vue, or Svelte overheads.
- **Real-Time Responsiveness**: Every single character typed recalculates total score bounds immediately without requiring form submissions.
- **Case-Insensitive**: Input `A` effortlessly evaluates identically against parameter `a` internally.
- **Independent Match Parsing**: Typings don't deduplicate scores—typing repeating valid characters correctly stacks continuous points linearly!

## 💻 Tech Stack
- **HTML5** structure elements
- **CSS3** (with `:root` conditional variable mappings & `@keyframes`)
- **Vanilla JS** (ES6+ modular `.mjs` standard)
- **Vite** (acting purely as the lightning-fast hot-reloading development server without bundling bloat)

---

## 🏃 Getting Started

Getting this loaded locally onto your browser is incredibly straightforward.

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed, as it supplies the `npm` registry necessary to run the barebone Vite server.

### Installation

1. **Clone/Download the directory**.
2. Open your terminal inside the exact project directory and run:

```bash
npm install
```
*(This just installs the `vite` development package to allow instant-reload local hosting. None of the application logic relies on these node modules).*

3. **Start the local server:**

```bash
npm run dev
```

4. You will see an output like:
```bash
  VITE v8.0.10  ready in 150 ms
  ➜  Local:   http://localhost:5173/
```
5. Click or traverse to `http://localhost:5173/` in Chrome to open the local development sandbox!

---

## 🔍 How Scoring Works

- **Typing Valid Characters**: Any inputted alphabet character that appears ANYWHERE natively inside the current target word collection instantly adds its mathematical frequency to your score! 
- **Non-Letter Elements**: Spaces and punctuation marks natively update your total progress percentage (representing true sequence length) but they return precisely `0` points toward the score.
- **Switching Data Arrays**: Toggling the dropdown on the top-right forces the engine into immediately parsing the brand new collection and recalculates your raw score and percentage matching retroactively.

## 🎮 Interface Previews

Explore sleek micro-interactions:
- Watch target words organically pop when your input correctly bridges validation paths.
- View real-time color-coded terminal parsing at the bottom identifying exact match vectors (green valid; red invalid).
- Interact dynamically using native CSS custom inputs.

---

### *Authored completely locally inside Vanilla JS boundaries. Beautiful UI, zero API bloat.*
