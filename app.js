window.addEventListener("load", solve);

function solve() {
  const timeInput = document.getElementById("time");
  const dateInput = document.getElementById("date");
  const placeInput = document.getElementById("place");
  const eventInput = document.getElementById("event-name");
  const emailInput = document.getElementById("email");
  const addBtn = document.getElementById("add-btn");
  const upcomingList = document.getElementById("upcoming-list");
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
