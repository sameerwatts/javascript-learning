// select elements
const typerContainer = document.querySelector('.typer');

const sarcastic = typerContainer.querySelector('#sarcastic');
const funky = typerContainer.querySelector('#funky');
const unable = typerContainer.querySelector('#unable');
const textarea = typerContainer.querySelector('[name="text"]');
const result = typerContainer.querySelector('.result');

/* eslint-disable */
const funkyLetters = {
  "-": "₋",
  "!": "ᵎ",
  "?": "ˀ",
  "(": "⁽",
  ")": "₎",
  "+": "⁺",
  "=": "₌",
  0: "⁰",
  1: "₁",
  2: "²",
  4: "₄",
  5: "₅",
  6: "₆",
  7: "⁷",
  8: "⁸",
  9: "⁹",
  a: "ᵃ",
  A: "ᴬ",
  B: "ᴮ",
  b: "ᵦ",
  C: "𝒸",
  d: "ᵈ",
  D: "ᴰ",
  e: "ₑ",
  E: "ᴱ",
  f: "𝒻",
  F: "ᶠ",
  g: "ᵍ",
  G: "ᴳ",
  h: "ʰ",
  H: "ₕ",
  I: "ᵢ",
  i: "ᵢ",
  j: "ʲ",
  J: "ᴶ",
  K: "ₖ",
  k: "ₖ",
  l: "ˡ",
  L: "ᴸ",
  m: "ᵐ",
  M: "ₘ",
  n: "ₙ",
  N: "ᴺ",
  o: "ᵒ",
  O: "ᴼ",
  p: "ᵖ",
  P: "ᴾ",
  Q: "ᵠ",
  q: "ᑫ",
  r: "ʳ",
  R: "ᵣ",
  S: "ˢ",
  s: "ˢ",
  t: "ᵗ",
  T: "ₜ",
  u: "ᵘ",
  U: "ᵤ",
  v: "ᵛ",
  V: "ᵥ",
  w: "𝓌",
  W: "ʷ",
  x: "ˣ",
  X: "ˣ",
  y: "y",
  Y: "Y",
  z: "𝓏",
  Z: "ᶻ",
};
/* eslint-enable */

function makeSarcastic(sentance) {
  const sarcasticSentance = sentance
    .split('')
    .map((char, i) => {
      if (i % 2) {
        return char.toUpperCase();
      }
      return char;
    })
    .join('');
  return sarcasticSentance;
}

function makeFunky(sentance) {
  const funkySentance = sentance
    .split('')
    .map((char) => {
      if (char === ' ') {
        return char;
      }
      const funkyLetter = funkyLetters[char];
      return funkyLetter;
    })
    .join('');
  return funkySentance;
}
result.textContent = textarea.value;
const updateContent = (text) => {
  result.textContent = text;
  const mod = text.split('');
  console.log(mod);
};

// add event listeners
textarea.addEventListener('input', (e) => updateContent(e.target.value));
