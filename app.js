window.addEventListener("load", solve);

function solve() {
  const timeInput = document.getElementById("time");
  const dateInput = document.getElementById("date");
  const placeInput = document.getElementById("place");
  const eventInput = document.getElementById("event");
  const emailInput = document.getElementById("email");
  const addBtn = document.getElementById("add-btn");
  const upcomingList = document.getElementById("upcoming-list");
  const secondfield = document.getElementById("second-field");
  const thirdfield = document.getElementById("third-field");
  const clearBtn = document.getElementById("clear");

  addBtn.addEventListener("click", onAdd);

  function onAdd(event){
    event.preventDefault();
    
  }
}
