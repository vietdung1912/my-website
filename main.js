var listTask = [
    'Task 1',
    'Task 2',
    'Task 3',
    'Task 4',
    'Task 5',
    'Task 6',
    'Task 7',
    'Task 5',
    'Task 6',
    'Task 7',
    'Task 5',
    'Task 6',
    'Task 7 Task 7 Task 7 Task 7 Task 7 Task 7 Task 7 Task 7',
]

function showNumberTask(listTask) {
    var numTask = document.querySelector('.list-info')
    numTask.innerHTML = `${listTask.length} tasks.`
}

function searchTask(element) {
    var result = listTask.filter(task => task == element.value.trim())
    renderTask(result.length === 0 ? listTask : result)
    
}

function renderTask(listTask) {
    var htmls = document.querySelector('.list-item')
    var list = listTask.map(task => {
        return `
            <div class='item'>
                <div class="item-info">${task}</div>
                <div class="delete-btn" onclick="handleDelete(this)">Delete</div>
            </div>
        `
    })
    showNumberTask(listTask)
    htmls.innerHTML = list.join('')
}

function activeTag(element) {
    var type = document.querySelectorAll('.action')
    for (var index of type) {
        index.classList.remove('active')
    }
    element.classList.add('active')
}

function handleDelete(element) {
    var taskItem = element.parentElement;
    if (confirm("Are you sure?") == true){
        taskItem.remove()
        showNumberTask(listTask)
    }
}

function handleAddTask() {
    var input = document.querySelector(".input-task")
    console.log(input.value)
    if (input.value === "") {
        console.log("Empty input.")
    }
    else {
        listTask.push(input.value)
        input.value = ''
        renderTask(listTask)
    }
}

renderTask(listTask)