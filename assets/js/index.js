
// Set up an element to display the current date
function setupCurrentDateEl() {
    var currentDay = moment().format("dddd, MMMM Do");
    $("#currentDay").text(currentDay);
}

// Set up the click handlers for saving calendar events
// Hard to do algorithmically - if i replaces numbers,
// then i is out of scope when the event handler actually fires
function setupSaveButtonHandlers() {

    $("#saveItem0").on("click", () => {
        saveText(0);
    });
    $("#saveItem1").on("click", () => {
        saveText(1);
    });
    $("#saveItem2").on("click", () => {
        saveText(2);
    });
    $("#saveItem3").on("click", () => {
        saveText(3);
    });
    $("#saveItem4").on("click", () => {
        saveText(4);
    });
    $("#saveItem5").on("click", () => {
        saveText(5);
    });
    $("#saveItem6").on("click", () => {
        saveText(6);
    });
    $("#saveItem7").on("click", () => {
        saveText(7);
    });
    $("#saveItem8").on("click", () => {
        saveText(8);
    });

}

// Save each calendar event text to localstorage by inserting it into the array
function saveText(id) {
    var pastEvents = JSON.parse(localStorage.getItem("events"));

    var inputText = $(`#input${id}`).val();

    pastEvents[id] = inputText;

    localStorage.setItem("events", JSON.stringify(pastEvents));
}

// Set up the local storage
function setupLocalStorage() {
    var calendarEvents = JSON.parse(localStorage.getItem("events"));
    if (!calendarEvents) {
        localStorage.setItem("events", JSON.stringify([]));
        return;
    }

    for (var i = 0; i < 9; i++) {
        var textAreaEl = $(`#input${i}`);
        if (calendarEvents[i]) {
            textAreaEl.val(calendarEvents[i]);
        }
    }
}

// Set the background color of the calendar event
// based on the current time of the day and when the event is
function setColors() {

    // Get the 24 hour value of the current time
    var now = moment().format("H");

    // Set each element
    for (var i = 0; i < 9; i++) {

        // Get the element to set its background
        var hourBlock = $(`#input${i}`);

        // Get the 24 hour value of the time block
        var hour = hourBlock.attr("data-hour");

        // Set the background color of the calendar event
        // based on whether it's upcoming, current, or past
        if (now > hour) {
            hourBlock.addClass("bg-secondary");
        } else if (now < hour) {
            hourBlock.addClass("bg-success");
        } else if (now == hour) {
            hourBlock.addClass("bg-danger");
        }
    }
}

// Do any initial setup for the app
function init() {
    setupCurrentDateEl();
    setupSaveButtonHandlers();
    setupLocalStorage();
    setColors();
}

init();