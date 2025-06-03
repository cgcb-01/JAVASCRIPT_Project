let task = document.querySelector('input[type="text"]');
let time = document.querySelector('input[type="time"]');
const button = document.querySelector('button');
const list = document.querySelector('.listContainer');
const timelist = document.querySelector('.timeContainer');

button.addEventListener('click', addtask);

function addtask() {
    if (task.value === "" && time.value === "") {
        alert("Please Enter any task and a time");
    } else if (time.value === "") {
        alert("Please enter a time.");
    } else if (task.value === "") {
        alert("Please enter a task");
    } else {
        // Create task list item
        const li = document.createElement("li");
        li.textContent = `${task.value}`;

        // Create time list item
        const li2 = document.createElement("li");
        li2.textContent = `${time.value}`;

        // Create delete span
        const span = document.createElement('span');
        span.textContent = ' X';
        span.classList.add('delete');

        // Add event listener to span
        span.addEventListener('click', function () {
            li.remove();     // remove the task
            li2.remove();    // remove the corresponding time
        });

        // Append delete button to task and add to list
        li.appendChild(span);
        list.appendChild(li);
        timelist.appendChild(li2);

        // Clear inputs
        time.value = "";
        task.value = "";
    }
}
