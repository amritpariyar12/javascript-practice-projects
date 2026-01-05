const input = document.getElementById("todoinput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("todolist");


addBtn.addEventListener("click", () => {
    const task = input.value.trim();
    if (task === "") return;

    const li = document.createElement("li");
    li.innerHTML = `${task} <span class="remove">❌</span>`;
    list.appendChild(li);
    input.value = "";

    li.querySelector(".remove").addEventListener("click", () => {
        li.remove();
    });
});




