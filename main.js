function activeTag(e) {
    var type = document.querySelectorAll('.action')
    for (var index of type) {
        index.classList.remove('active')
    }
    e.classList.add('active')
}