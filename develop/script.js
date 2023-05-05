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

  