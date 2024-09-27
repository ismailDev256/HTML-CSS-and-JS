
let addbtn = document.querySelector(".addtask");
let task = document.querySelector('.user-input-task-data');
let taskcontainer = document.querySelector('.user-outputs-tasks');

addbtn.addEventListener('click', () => {
    if (task.value === "") {
        alert('please write a task first');
        saveData();
    } else {
        let uservalue = task.value;

        let spn = document.createElement('span');
        let li = document.createElement('li');
        let i = document.createElement('i');

        i.textContent = 'x';
        taskcontainer.appendChild(li);
        li.appendChild(spn);
        li.appendChild(i);
        spn.textContent = uservalue;
        saveData()

        task.value = "";
    }
    
});
taskcontainer.addEventListener('click', (ele) => {
    if (ele.target.tagName == "SPAN") {
        ele.target.classList.toggle('checked');
    } else if (ele.target.tagName == "I") {
        ele.target.parentNode.remove();
    }
    saveData();
})

function saveData() {
    localStorage.setItem('data', taskcontainer.innerHTML);
}
function uploaddata() {
    taskcontainer.innerHTML = localStorage.getItem("data");
}
uploaddata();