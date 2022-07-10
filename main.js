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
    }
}

function handleAddTask() {
    var input = document.querySelector(".input-task")
    console.log(input.value)
    if (input.value === "") {
        console.log("Empty input.")
    }
    else {
        var listItem = document.querySelector('.list-item')
        
    }
}