
//Add task
document.getElementById("done-all").disabled = true;
document.getElementById("add-task").addEventListener("click", function () {
    const takeTodo = document.getElementById("take-todo");
    const task = takeTodo.value;
    if (task === '') {
        alert('Please enter a task');
        return;  // stop the function execution if no task is entered.
    }
    const div = document.createElement("div");
    div.classList.add("grid", "grid-cols-3", "gap-3", "mt-3", "item");

    div.innerHTML = `
                <p class="text-center mt-2">${document.querySelectorAll('.item').length+1}</p>
                <p class="text-center mt-2">${task}</p>
                <div class="text-center">
                <button class="btn btn-success item-delete">Done</button>
               </div>
               <hr class="col-span-3">
       `;
    document.getElementById("task-list").appendChild(div);
    takeTodo.value = '';
    document.getElementById("done-all").disabled = false;
    // Add event listener to the "Done" button for deleting the task
    const deleteButton = div.querySelector('.item-delete');
    deleteButton.addEventListener('click', function () {
        if (deleteButton.innerText === 'Done') {
            deleteButton.innerText = 'Remove';
            div.classList.add('line-through', 'opacity-50');
            deleteButton.classList.remove('btn-success');
            deleteButton.classList.add('btn-error');
        }
        else {
            div.remove();
        }
        if (document.querySelectorAll('.item').length === 0) {
            document.getElementById("done-all").disabled = true;
        }
       
    });
});



//Delete all
document.getElementById("done-all").addEventListener("click", function () {
    document.getElementById("task-list").innerHTML = '';
    document.getElementById("done-all").disabled = true;
});



