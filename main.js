const addBtn = document.querySelector(".add-btn")
const updateBtn = document.querySelector(".update-btn")
const type = document.querySelectorAll('.action')
const input = document.querySelector(".input-task")

var listTask = [
    {
        name: 'Learn HyperText Markup Language',
        status: 'done'
    },
    {
        name: 'Learn Cascading Style Sheets',
        status: 'active'
    },
    {
        name: 'Learn JavaScript',
        status: 'done'
    },
    {
        name: 'Learn React JS',
        status: 'active'
    },
    {
        name: 'Learn PHP',
        status: 'active'
    },
    {
        name: 'Learn Ruby',
        status: 'done'
    },
    {
        name: 'Learn Java',
        status: 'done'
    },
    {
        name: 'Learn Python',
        status: 'done'
    },
    {
        name: 'Learn C#',
        status: 'active'
    }
]

function showNumberTask(listTask) {
    var numTask = document.querySelector('.list-info')
    numTask.innerHTML = `${listTask.length} tasks.`
}

function searchTask(element) {
    var result = listTask.filter(task => {
        return task.name.toUpperCase()
        .indexOf(element.value.toUpperCase()) > -1 ? task.name: ''
    })
    renderTask(result.length === 0 ? listTask : result)
}

function clearSearch(element) {
    element.value = '';
}

function renderTask(listTask) {
    var htmls = document.querySelector('.list-item')
    var list = listTask.map((task, index) => {
        return `
            <div class='item ${task.status === 'done'? 'checked' : ''}' data-item='${index}'>
                <div class="item-info">${task.name}</div>
                <i class="check-btn fa-solid fa-calendar-check" onclick="handleChecked(this)"></i>
                <i class='edit-btn fa fa-edit'  onclick="handleEdit(this)"></i>
                <i class="delete-btn fa-solid fa-trash-can" onclick="handleDelete(this)"></i>
            </div>
        `
    })
    showNumberTask(listTask)
    htmls.innerHTML = list.join('')
}

function showAllTask() {
    const allTask = document.querySelector('.action')
    for (var index of type) {
        index.classList.remove('active')
    }
    allTask.classList.add('active')
    renderTask(listTask)
}

function showActiveTask() {
    const activeTag = type[1]
    for (var index of type) {
        index.classList.remove('active')
    }
    activeTag.classList.add('active')
    tasks = listTask.filter(task => task.status === 'active');
    renderTask(tasks)
}

function showDoneTask() {
    const doneTask = type[2]
    for (var index of type) {
        index.classList.remove('active')
    }
    doneTask.classList.add('active')
    tasks = listTask.filter(task => task.status === 'done');
    renderTask(tasks)
}

function handleDelete(element) {
    var taskItem = element.parentElement;
    var nameTask = element.parentElement.children[0].innerText;
    if (confirm("Are you sure?") == true){
        taskItem.remove(element.value)
        listTask = listTask.filter(task => task.name !== nameTask)
        showNumberTask(listTask)
    }
}

function handleEdit(element) {
    var taskItem = element.parentElement;
    addBtn.classList.add('hidden')
    updateBtn.classList.remove('hidden')
    input.value = taskItem.innerText
    input.setAttribute('data-index', taskItem.getAttribute('data-item'))
    input.focus()
}

function handleChecked(element) {
    const type = document.querySelector('.action-type > .active').innerText
    var taskItem = element.parentElement;
    var nameTask = element.parentElement.children[0].innerText;
    var flag = taskItem.classList.toggle('checked');
    for (var task of listTask) {
        if (task.name === nameTask){
            if (type === 'All'){
                task.status = flag ? 'done' : 'active'
                showAllTask()
            }
            else { 
                if(flag === true) {
                    task.status = 'done'
                    showActiveTask()
                }
                else {
                    task.status = 'active'
                    showDoneTask()
                }
            }
        }
    }
}

function handleAddTask() {
    const inputValue = input.value.trim()
    if (inputValue === "") {
        alert("Empty input.")
    }
    else {
        const checkTask = listTask.find(task => task.name === inputValue)
        if (!checkTask) {
            listTask.push({
                name: inputValue,
                status: 'active'
            })
        }
        else {
            alert('Task already exists.')
        }
        input.value= ''
        renderTask(listTask)
        showNumberTask(listTask)
    }
}

function handleUpdateTask() {
    const index = input.getAttribute('data-index')
    console.log(input.value)
    console.log(listTask[index])
    if (confirm("Are you sure?") == true){
        listTask[index].name = input.value
    }
    addBtn.classList.remove('hidden')
    updateBtn.classList.add('hidden')
    input.value= ''
    renderTask(listTask)
    showNumberTask(listTask)
}
renderTask(listTask)