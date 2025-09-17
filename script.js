let btn = document.querySelector("button")
let task = document.querySelector("#taskinput")
let list = document.querySelector("#list")



btn.addEventListener("click", addtask)

function addtask() {
    if (taskinput.value.trim() === "") return; // ignore empty input

    // 2. Create a new <li>
    const li = document.createElement("li");
    li.textContent = taskinput.value;
    // btn.style.color ="blue"

    // 3. Add click event to mark as complete
    li.addEventListener("click", () => {
        li.classList.toggle("completed");
    });

    // 4. Add remove button
    const removeBtn = document.createElement("Rbutton");
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", (e) => {
        e.stopPropagation(); // prevent triggering li click
        li.remove();
    });

    li.appendChild(removeBtn)
    list.appendChild(li)

    taskinput.value = "";
}