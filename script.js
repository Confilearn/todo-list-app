const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

addTask = () => {
  // To make sure the form is filled
  if (inputBox.value === "") {
    alert("You must write something");
  } else {
    // Create's a li element and append it to the list-container
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    // Create's a span element and append it to the li element
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  //   To make the input-box empty after submission
  inputBox.value = "";
  saveData();
};

listContainer.addEventListener(
  "click",
  function (item) {
    // Toggles the class 'checked' when the tagName(LI) is clicked
    if (item.target.tagName === "LI") {
      item.target.classList.toggle("checked");
      saveData();
      // Removes the li element (which is the parent of the element span) when the tagName(SPAN) is clicked
    } else if (item.target.tagName === "SPAN") {
      item.target.parentElement.remove();
      saveData();
    }
  },
  false
);

// Saves the list-container data to the browser storage
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

// Gets the list-container data from the browser storage
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}

// Shows the saved browser data on refresh
showTask();
