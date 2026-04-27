import { collections } from './collections.mjs';

let currentCollection = "fruits";
let words = collections[currentCollection];
let charMap = {};

// Build character map frequencies
function buildCharMap(wordsArray) {
  const map = {};
  wordsArray.forEach((word) => {
    for (let char of word.toLowerCase()) {
      if (!/[a-z]/.test(char)) continue;
      map[char] = (map[char] || 0) + 1;
    }
  });
  return map;
}

// Set up the word list in the DOM with staggered animations
function setupWordList() {
  const container = document.getElementById("word-list");
  container.innerHTML = "";
  
  words.forEach((word, index) => {
    const span = document.createElement("span");
    span.classList.add("word");
    span.textContent = word;
    // Inject staggered slideDown delay to make list cascade
    span.style.animation = `slideDown 0.4s cubic-bezier(0.2, 0.8, 0.2, 1) forwards ${index * 0.05}s`;
    span.dataset.word = word;
    container.appendChild(span);
  });
}

// Just update the highlighted class without rebuilding the DOM
function updateWordsHighlight(input = "") {
  const lower = input.toLowerCase();
  const spans = document.getElementById("word-list").querySelectorAll(".word");

  spans.forEach((span) => {
    const word = span.dataset.word;
    let match = false;
    for (let char of lower) {
      if (word.includes(char)) {
        match = true;
        break;
      }
    }
    if (match) {
      span.classList.add("active-word");
    } else {
      span.classList.remove("active-word");
    }
  });
}

// Calculate score
function calculateScore(input) {
  let score = 0;
  let matches = 0;
  let total = input.length;

  for (let char of input.toLowerCase()) {
    if (!/[a-z]/.test(char)) continue;

    if (charMap[char]) {
      score += charMap[char];
      matches++;
    }
  }

  return {
    score,
    percentage: total === 0 ? 0 : Math.round((matches / total) * 100),
  };
}

// Highlight input
function highlightInput(input) {
  let result = "";

  for (let char of input) {
    if (!/[a-z]/i.test(char)) {
      result += `<span class="neutral">${char}</span>`;
    } else if (charMap[char.toLowerCase()]) {
      result += `<span class="match">${char}</span>`;
    } else {
      result += `<span class="no-match">${char}</span>`;
    }
  }

  return result;
}

// Initialize application state
function init() {
  charMap = buildCharMap(words);
  const inputEl = document.getElementById("input");
  
  setupWordList();
  
  // Force a re-evaluation of the current UI based on the new dictionary
  evaluateInput(inputEl.value);
}

let previousScore = 0;

function evaluateInput(value) {
  const result = calculateScore(value);
  const diff = result.score - previousScore;

  if (diff > 0) {
    const particleDiv = document.createElement("div");
    particleDiv.classList.add("floating-point");
    particleDiv.textContent = `+${diff}`;
    
    // Randomize horizontal spawn to look distinct per character typed
    const randX = Math.floor(Math.random() * 80) + 10;
    particleDiv.style.left = `${randX}%`;
    
    const container = document.getElementById("particle-container");
    container.appendChild(particleDiv);
    
    setTimeout(() => particleDiv.remove(), 800);
  }
  previousScore = result.score;

  const scoreSpan = document.getElementById("score");
  if (scoreSpan.textContent !== String(result.score)) {
    scoreSpan.textContent = result.score;
    // Animate the counter on change
    scoreSpan.classList.remove("score-animate");
    void scoreSpan.offsetWidth; // Force reflow
    scoreSpan.classList.add("score-animate");
  }

  document.getElementById("percentage").textContent = result.percentage + "%";
  document.getElementById("progress-bar").style.width = result.percentage + "%";

  document.getElementById("highlighted-input").innerHTML = highlightInput(value);

  updateWordsHighlight(value);
}

// Event listeners
const inputEl = document.getElementById("input");
inputEl.addEventListener("input", (e) => evaluateInput(e.target.value));

const collectionSelect = document.getElementById("collection-select");
collectionSelect.addEventListener("change", (e) => {
  currentCollection = e.target.value;
  words = collections[currentCollection];
  init();
});

const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  const htmlEl = document.documentElement;
  const currentTheme = htmlEl.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  
  htmlEl.setAttribute("data-theme", newTheme);
  themeToggle.querySelector(".icon").textContent = newTheme === "dark" ? "☀️" : "🌙";
});

// Run start
init();
