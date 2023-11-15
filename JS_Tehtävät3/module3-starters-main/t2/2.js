
const div = document.querySelector("#target")
const first = document.createElement('li')
const second = document.createElement('li')
const third = document.createElement("li")
first.textContent = "First item"
second.textContent = "Second item"
third.textContent = "Third item"
div.appendChild(first)
div.appendChild(second)
div.appendChild(third)
second.classList.add('my-item')