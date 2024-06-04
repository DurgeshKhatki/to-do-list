
/* To add a task in the list */
document.getElementById("addToListBtn").addEventListener("click", addTask);
function addTask(){
    var input = document.getElementById("taskInput");
    var task = input.value;
    if(task ===""){
        alert("please enter a task");
        return;
    }
    var listItem = document.createElement('li');
    listItem.textContent = task;
    
    //to delete any particular item
    var deleteButton = document.createElement("button");
    deleteButton.className = 'deleteButton';
    deleteButton.innerHTML = `<i class="fa-solid fa-trash"></i>`
    deleteButton.onclick = function(){
        listItem.remove();
    };

    //to mark any item completed
    var completeButton = document.createElement('button');
    completeButton.className = "cmpleteBtn";
    completeButton.innerHTML = `<i class="fa-solid fa-check-to-slot"></i>`;
    completeButton.onclick = function(){
        listItem.style.textDecoration = 'line-through';
        completeButton.remove();
    };
    listItem.appendChild(deleteButton);
    listItem.appendChild(completeButton);

    document.getElementById("taskList").appendChild(listItem);
    input.value ="";
}

/* to be able to clear all item at once */
document.getElementById("clearAllTag").addEventListener("click", () => {
    document.getElementById("taskList").innerHTML ="";
})

/*to be able to complete all item at once */
document.getElementById("completeAllTag").addEventListener("click", () => {
    var tasks = document.getElementById("taskList").getElementsByTagName("li");
    for(var i=0; i<tasks.length; i++){
        tasks[i].style.textDecoration = "line-through";
    }
    document.querySelectorAll(".completeBtn").remove();
});

function showAll(){
    var tasks = document.getElementById("taskList").getElementsByTagName("li");
    tasks.forEach(e => {
        tasks[e].style.display ="block";
    });
}

/* to show only completed task */
document.getElementById("completedFilter").addEventListener("click", () => {
 var tasks = document.getElementById("taskList"). getElementsByTagName("li");
 for(var i=0; i<tasks.length; i++){
    if(tasks[i].style.textDecoration === "line-through"){
        tasks[i].style.display = "block";
    }
    else{
        tasks[i].style.display = "none";
    }
 };
});

/* to show un completed tasks */
document.getElementById("uncompletedFilter").addEventListener("click", () => {
    var tasks = document.getElementById("taskList"). getElementsByTagName("li");
    for(var i=0; i<tasks.length; i++){
    if(tasks[i].style.textDecoration !== "line-through"){
        tasks[i].style.display = "block";
    }
    else{
        tasks[i].style.display = "none";
    }
 };
});