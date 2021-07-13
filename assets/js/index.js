
// Set up an element to display the current date
function setupCurrentDateEl() {

    // Get the current day in a nice format and display it
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
}

// Set up the click handlers for saving calendar events
function setupSaveButtonHandlers() {

    // Hard to do algorithmically - if i replaces the numbers,
    // then i is out of scope when the event handler actually fires,
    // so id is undefined. There's only 9 anyway.

    // Could've used an event.target implementation instead

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

    // Get the current events array from localstorage
    var currentEvents = JSON.parse(localStorage.getItem("events"));

    // Get the new input text the user has typed
    var inputText = $(`#input${id}`).val();

    // Store the input text in the localstorage array at the correct time block
    currentEvents[id] = inputText;

    // Resave the array to localstorage
    localStorage.setItem("events", JSON.stringify(currentEvents));
}

// Set up the local storage
function setupLocalStorage() {

    // Get an array of the events saved on the calendar
    var calendarEvents = JSON.parse(localStorage.getItem("events"));

    // If there is no calendar array yet, create a new one and return
    if (!calendarEvents) {
        localStorage.setItem("events", JSON.stringify([]));
        return;
    }

    // Populate in the calendar event elements with saved events
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

        // Get the time block element in order to set its background
        var hourBlock = $(`#input${i}`);

        // Get the 24 hour value of the time block via data-attributes
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

// Do initial setup for the application:
function init() {

    // 1. Display current date
    setupCurrentDateEl();

    // 2. Create event handlers for each save button
    setupSaveButtonHandlers();

    // 3. Populate time blocks with previously saved events
    setupLocalStorage();

    // 4. Set the colors of the time blocks based on the current time
    setColors();
}

// Start her up
init();