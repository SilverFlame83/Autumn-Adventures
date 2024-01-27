window.addEventListener("load", solve);

function solve() {
  const timeInput = document.getElementById("time");
  const dateInput = document.getElementById("date");
  const placeInput = document.getElementById("place");
  const eventInput = document.getElementById("event-name");
  const emailInput = document.getElementById("email");
  const addBtn = document.getElementById("add-btn");
  const upcomingList = document.getElementById("upcoming-list");
  const checkList = document.getElementById("check-list");
  const secondfield = document.getElementById("second-field");
  const thirdfield = document.getElementById("third-field");
  const clearBtn = document.getElementById("clear");

  addBtn.addEventListener("click", onAdd);

  function onAdd(event) {
    event.preventDefault();

    if (
      timeInput.value === "" ||
      dateInput.value === "" ||
      placeInput.value === "" ||
      eventInput.value === "" ||
      emailInput.value === ""
    ) {
      return;
    }

    const checkListEventContent = elManager("li", null, "event-content");
    const checkListArticle = elManager("article");
    const beginning = elManager(
      "p",
      `Begins: ${dateInput.value} at: ${timeInput.value}`
    );
    const place = elManager("p", `In: ${placeInput.value}`);
    const eve = elManager("p", `Event: ${eventInput.value}`);
    const contact = elManager("p", `Contact: ${emailInput.value}`);
    const editBtn = elManager("button", "Edit", "edit-btn");
    const continueBtn = elManager("button", "Continue", "continue-btn");

    append(checkListArticle, beginning, place, eve, contact);
    append(checkListEventContent, checkListArticle, editBtn, continueBtn);
    append(checkList, checkListEventContent);

   let editTime = timeInput.value;
    let editdate = dateInput.value;
    let editPlace = placeInput.value;
    let editEvent = eventInput.value;
    let editEmail = emailInput.value;

    timeInput.value = "";
    dateInput.value = "";
    placeInput.value ="";
    eventInput.value = "";
    emailInput.value = "";

    addBtn.disabled = true;

    editBtn.addEventListener('click', onEdit);

    function onEdit(){
        timeInput.value = editTime;
        dateInput.value = editdate;
        placeInput.value = editPlace;
        eventInput.value = editEvent;
        emailInput.value = editEmail;

        checkListEventContent.remove();
        addBtn.disabled = false;
    }


    function elManager(type, txtContent, className) {
      const el = document.createElement(type);
      if (txtContent) {
        el.textContent = txtContent;
      }
      if (className) {
        el.className = className;
      }

      return el;
    }

    function append(main, ...arg) {
      while (arg.length) {
        main.appendChild(arg.shift());
      }
      return main;
    }
  }
}
