var saveBtn = document.querySelectorAll(".saveBtn");
var timeBlock = document.querySelectorAll(".time-block");

const addEvent = (ev) => {
    ev.preventDefault();
    let event = {
        id: Date.now(),
        event: document.querySelector('.description').value
    }
    //console.log("event", event);
    localStorage.setItem('event', JSON.stringify(event.event));
}

  saveBtn.forEach(btn => {
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      console.log("save button clicked");
      addEvent(event); //calling add event function
    });
  });

  $("#9amblock").val(localStorage.getItem("event"));
  $("#10amblock").val(localStorage.getItem("event"));
  $("#11amblock").val(localStorage.getItem("event"));
  $("#12pmblock").val(localStorage.getItem("event"));
  $("#1pmblock").val(localStorage.getItem("event"));
  $("#2pmblock").val(localStorage.getItem("event"));
  $("#3pmblock").val(localStorage.getItem("event"));
  $("#4pmblock").val(localStorage.getItem("event"));
  $("#5pmblock").val(localStorage.getItem("event"));

  var today = dayjs()

  timeBlock.forEach(function (timeBlock) {//looping through each time block
    var currentTime = today.hour();//getting current hour
    var timeBlockHour = timeBlock.getAttribute("#hour");//getting time block hour
    console.log(timeBlockHour);ggi

    if (currentTime > timeBlockHour) {//comparing current hour to time block hour
      timeBlock.classList.add("past");
    } else if (currentTime < timeBlockHour) {
      timeBlock.classList.add("future");
    } else {
      timeBlock.classList.add("present");
    }
  });