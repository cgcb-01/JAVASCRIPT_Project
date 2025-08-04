const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const table = document.getElementById("routine-table");

days.forEach((day) => {
  const row = document.createElement("div");
  row.className = "row";

  // Day name cell
  const dayCell = document.createElement("div");
  dayCell.className = "cell day-cell";
  dayCell.textContent = day;
  row.appendChild(dayCell);

  // Subject cell
  const subjectCell = document.createElement("div");
  subjectCell.className = "cell";
  row.appendChild(subjectCell);

  // Button cell
  const buttonCell = document.createElement("div");
  buttonCell.className = "cell button-cell";
  const addButton = document.createElement("button");
  addButton.textContent = "Add Subject";
  buttonCell.appendChild(addButton);
  row.appendChild(buttonCell);

  addButton.onclick = () => {
    // Remove any existing input-wrapper
    const existing = buttonCell.querySelector(".input-wrapper");
    if (existing) return;

    const inputWrapper = document.createElement("div");
    inputWrapper.className = "input-wrapper";

    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Enter subject";

    const okButton = document.createElement("button");
    okButton.textContent = "OK";

    okButton.onclick = (e) => {
      e.stopPropagation(); // prevent bubbling
      const subject = input.value.trim();
      if (subject !== "") {
        const subjectDisplay = document.createElement("div");
        subjectDisplay.textContent = subject;
        subjectCell.appendChild(subjectDisplay);
      }
      inputWrapper.remove();
    };

    inputWrapper.appendChild(input);
    inputWrapper.appendChild(okButton);
    buttonCell.appendChild(inputWrapper);

    input.focus(); // auto-focus input
  };

  table.appendChild(row);
});
