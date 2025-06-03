let task=document.querySelector('input[type="text"]');
let time=document.querySelector('input[type="time"]')
const button=document.querySelector('button');
const list=document.querySelector('.listContainer');
const timelist=document.querySelector('.timeContainer')
button.addEventListener('click',addtask)
function addtask()
{
    if(task.value==="" & time.value ==="")
        alert("Please Enter any task. and a time");
    else if(time.value ==="")
        alert("Please enter a time.");
    else if(task.value ==="")
        alert("Please enter a task");
    else{
        const li=document.createElement("li");
        li.textContent=`${task.value}`
        list.append(li);
        const li2=document.createElement("li");
        li2.textContent=`${time.value}`
        timelist.append(li2);
        time.value="";
        task.value="";
       const span = document.createElement('span');
        span.textContent = 'X';
        span.classList.add('delete');
        li.append(span);
    }
}