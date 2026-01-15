const whispers = [
  "NODE VERIFIED",
  "FEED UNSTABLE",
  "ARCHIVE PARTIAL",
  "SYNC MISMATCH",
  "FRAME LOSS DETECTED"
];

const whisperEl = document.getElementById("whisper");
const hintBtn = document.getElementById("hintBtn");

// show a whisper occasionally (feels alive)
function randomWhisper() {
  const msg = whispers[Math.floor(Math.random() * whispers.length)];
  whisperEl.textContent = msg;
  whisperEl.classList.add("show");
  whisperEl.setAttribute("aria-hidden", "false");

  setTimeout(() => {
    whisperEl.classList.remove("show");
    whisperEl.setAttribute("aria-hidden", "true");
  }, 1800);
}

// subtle: random whisper after 6–14 seconds
setTimeout(() => {
  randomWhisper();
  setInterval(() => {
    if (Math.random() < 0.35) randomWhisper();
  }, 9000);
}, 6000 + Math.random() * 8000);

// also allow click anywhere to “ping” (optional)
hintBtn.addEventListener("click", () => {
  if (Math.random() < 0.7) randomWhisper();
});
