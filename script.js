document.querySelectorAll(".question").forEach((que) => {
    que.addEventListener('click', (e) => {
        if (que.parentNode.classList.contains("active")) {
            que.parentNode.classList.toggle("active")
        } else {
            document.querySelectorAll(".question").forEach((question) => {
                question.parentNode.classList.remove("active")
            })

            que.parentNode.classList.add("active");
        }
    })
})