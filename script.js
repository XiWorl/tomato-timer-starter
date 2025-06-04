

let display = document.getElementById("timer-display")
let breakButton = document.getElementById("break-btn")
let studyButton = document.querySelector('#study-btn') 
let studyCount = document.getElementById("study-count")
let breakCount = document.getElementById("break-count")

let studySessions = 0
let breakSessions = 0
let currentTimer = 1500
let interval = 1000
let id 
// display = "25:00"


function numberToTime(numInSeconds) {
    let minutes = Math.floor(numInSeconds / 60)
    let seconds = numInSeconds % 60

    
    if (minutes < 10) {
        minutes = "0" + minutes
    } 
    
    if (seconds < 10) {
        seconds = "0" + seconds
    } 
    return `${minutes}:${seconds}`
}


studyButton.addEventListener('click', function() {
    studySessions++
    currentTimer = 1500
    studyCount.innerHTML = studySessions

    if (id !== null) {
        clearInterval(id)
    }
    id = setInterval(() => {
        currentTimer -= 1
        display.innerHTML = numberToTime(currentTimer) 
    }, interval);
})




breakButton.addEventListener("click", function() {
    console.log("break click")
    breakSessions++
    breakCount.innerHTML = breakSessions   


    currentTimer = 300
    if (id !== null) {
        clearInterval(id)
    }
    id = setInterval(() => {
        currentTimer -= 1
        display.innerHTML = numberToTime(currentTimer) 
    }, interval);
})


