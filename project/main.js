"use strict";
const pomodoroBtn = document.getElementById("pomo-btn");
const shortBtn = document.getElementById("short-btn");
const longBtn = document.getElementById("long-btn");
const min = document.getElementById("minut");
const sec = document.getElementById("sekund");
const startPauseBtn = document.querySelector(".start");
const resetBtn = document.querySelector(".reset");
const stopBtn = document.querySelector(".stop");
const blink = document.getElementById("blink");

let includeActive =
  pomodoroBtn.classList.contains("active") ||
  longBtn.classList.contains("active") ||
  shortBtn.contains("active");

let timer;
let work = true;
let m = 25;
let s = 0;
let secund;
let minut = m;

function timeToString(n) {
  return n < 10 ? "0" + String(n) : n;
}

function startGame() {
  timer = setInterval(() => {
    s--;
    if (s == -1) {
      m--;
      s = 59;
    }
    if (m == -1) {
      if (!work) {
        m = 5;
      } else {
        m = 25;
      }
      work = !work;
      localStorage.setItem("work", work);
    }
    min.innerText = timeToString(m);
    sec.innerText = timeToString(s);
  }, 1000);
}

function resetTimer() {
  blink.classList.remove("move");
  clearInterval(timer);
  sec.innerText = "00";
  min.innerText = minut;
  m = minut;
  s = 0;
}

startPauseBtn.addEventListener("click", () => {
  blink.classList.add("move");
  if (includeActive) {
    startGame();
  } else {
    alert("Mode ni tanlang");
  }

  startPauseBtn.disabled = true;
});

resetBtn.addEventListener("click", () => {
  resetTimer();
  startPauseBtn.disabled = false;
});

stopBtn.addEventListener("click", () => {
  clearInterval(timer);
  startPauseBtn.disabled = false;
});

pomodoroBtn.addEventListener("click", () => {
  m = 25;
  minut = 25;
  s = 0;
  min.innerText = "25";
  sec.innerText = "00";
  pomodoroBtn.classList.add("active");
  shortBtn.classList.remove("active");
  longBtn.classList.remove("active");
  clearInterval(timer);
});

shortBtn.addEventListener("click", () => {
  m = 5;
  minut = 5;
  s = 0;
  min.innerText = "5";
  sec.innerText = "00";
  shortBtn.classList.add("active");
  pomodoroBtn.classList.remove("active");
  longBtn.classList.remove("active");
  clearInterval(timer);
});

longBtn.addEventListener("click", () => {
  m = 15;
  minut = 15;
  s = 0;
  min.innerText = "15";
  sec.innerText = "00";
  pomodoroBtn.classList.remove("active");
  shortBtn.classList.remove("active");
  longBtn.classList.add("active");
  clearInterval(timer);
});
