
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
        console.log(calendarEvents[i]);
        console.log(textAreaEl);
        if (calendarEvents[i]) {
            textAreaEl.val(calendarEvents[i]);
        }
    }
}

function setColors() {
    for (var i = 0; i < 9; i++) {
        $(`#input${i}`).addClass("bg-light");
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