const toggle = document.querySelector("#check");
const wrapper = document.querySelector(".wrapper");
const body = document.querySelector("body");
const primaryText = document.querySelectorAll(".primary_text");
const secondaryText = document.querySelectorAll(".secondary_text");
const divider = document.querySelectorAll(".divider");

const day = document.querySelector("#day");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

let week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function fixValue(num) {
  return num < 10 ? "0" + num : num;
}

function time() {
  const now = new Date();

  let currentDayIndex = now.getDay();
  let currentHour = now.getHours();
  let currentmin = now.getMinutes();
  let currentSec = now.getSeconds();

  day.innerHTML = week[currentDayIndex];
  hours.innerHTML = fixValue(currentHour);
  minutes.innerHTML = fixValue(currentmin);
  seconds.innerHTML = fixValue(currentSec);
}


function onThemeChange(theme) {
  if (theme === "dark") {


    wrapper.classList.add("dark");
    wrapper.classList.remove("light");

    body.classList.add("dark");
    body.classList.remove("light");

    primaryText.forEach((textEl) => {
      textEl.classList.add("dark");
      textEl.classList.remove("light");
    });
    secondaryText.forEach((textEl) => {
      textEl.classList.add("dark");
      textEl.classList.remove("light");
    });
    divider.forEach((textEl) => {
      textEl.classList.add("dark");
      textEl.classList.remove("light");
    });
  } else {
    // apply light theme
    wrapper.classList.add("light");
    wrapper.classList.remove("dark");

    body.classList.add("light");
    body.classList.remove("dark");

    primaryText.forEach((textEl) => {
      textEl.classList.add("light");
      textEl.classList.remove("dark");
    });
    secondaryText.forEach((textEl) => {
      textEl.classList.add("light");
      textEl.classList.remove("dark");
    });
    divider.forEach((textEl) => {
      textEl.classList.add("light");
      textEl.classList.remove("dark");
    });
  }
}

function handleThemeChange(e) {
  const isChecked = e.target.checked;

  localStorage.setItem('theme', isChecked ? 'dark' : 'light')

  if (isChecked === true) {
    onThemeChange("dark");
  } else {
    onThemeChange("light");
  }
}

setInterval(time, 1000);

toggle.addEventListener("click", handleThemeChange);

window.addEventListener("load", () => {
   
    const currentTheme = localStorage.getItem('theme')

    if(currentTheme) {
        toggle.checked = currentTheme !== 'light'
    }
    
    onThemeChange( currentTheme ||  "light");
});
