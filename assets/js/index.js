
// Set up an element to display the current date
function setupCurrentDateEl() {
    var currentDayEl = document.getElementById("currentDay");
    var currentDay = moment().format("dddd, MMMM Do");
    currentDayEl.innerText = currentDay;    
}

// Do any initial setup for the app
function init() {
    setupCurrentDateEl();
}

init();