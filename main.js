var listTask = [
    {
        name: 'Learn HyperText Markup Language.',
        status: 'done'
    },
    {
        name: 'Learn Cascading Style Sheets.',
        status: 'active'
    },
    {
        name: 'Learn JavaScript.',
        status: 'done'
    },
    {
        name: 'Learn React JS.',
        status: 'active'
    },
    {
        name: 'Learn PHP.',
        status: 'active'
    },
    {
        name: 'Learn Ruby.',
        status: 'done'
    },
    {
        name: 'Learn Java.',
        status: 'done'
    },
    {
        name: 'Learn Python.',
        status: 'done'
    },
    {
        name: 'Learn C#.',
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
    var list = listTask.map(task => {
        return `
            <div class='item ${task.status === 'done'? 'checked' : ''}'>
                <div class="item-info">${task.name}</div>
                <i class="checked-btn ti-check-box" onclick="handleChecked(this)"></i>
                <i class="delete-btn ti-trash" onclick="handleDelete(this)"></i>
            </div>
        `
    })
    showNumberTask(listTask)
    htmls.innerHTML = list.join('')
}

function showAllTask() {
    var type = document.querySelectorAll('.action')
    const allTask = document.querySelector('.action')
    for (var index of type) {
        index.classList.remove('active')
    }
    allTask.classList.add('active')
    renderTask(listTask)
}

function activeTag(element = '') {
    var type = document.querySelectorAll('.action')
    for (var index of type) {
        index.classList.remove('active')
    }
    element.classList.add('active')
    let tasks
    switch(element.innerText) {
        case 'Active':
            tasks = listTask.filter(task => task.status === 'active');
            renderTask(tasks)
            break
        case 'Done':
            tasks = listTask.filter(task => task.status === 'done');
            renderTask(tasks)
            break
        default:
            renderTask(listTask)
    }
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

function handleChecked(element) {
    var taskItem = element.parentElement;
    var nameTask = element.parentElement.children[0].innerText;
    var flag = taskItem.classList.toggle('checked');
    for (var task of listTask) {
        if (task.name === nameTask){
            task.status = flag ? 'done':'active'
        }
    }
}

function handleAddTask() {
    var input = document.querySelector(".input-task")
    if (input.value === "") {
        alert("Empty input.")
    }
    else {
        listTask.push({
            name: input.value,
            status: 'active'
        })
        input.value = ''
        renderTask(listTask)
        showNumberTask(listTask)
    }
}

renderTask(listTask)