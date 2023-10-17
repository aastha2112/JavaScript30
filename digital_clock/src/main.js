const day = document.querySelector("#day")
const hours = document.querySelector("#hours")
const minutes = document.querySelector("#minutes")
const seconds = document.querySelector("#seconds")

let week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]

function fixValue(num) {
    return num < 10 ? "0" + num : num
}

function time() {

    const now = new Date()

    let currentDayIndex = now.getDay()
    let currentHour = now.getHours()
    let currentmin = now.getMinutes()
    let currentSec = now.getSeconds()

    day.innerHTML = week[currentDayIndex]
    hours.innerHTML = fixValue(currentHour)
    minutes.innerHTML = fixValue(currentmin)
    seconds.innerHTML = fixValue(currentSec)

}
setInterval(time, 1000)