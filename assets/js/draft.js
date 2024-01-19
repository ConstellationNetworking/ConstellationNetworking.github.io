const db = firebase.firestore();

function addTask() {
    var inputValue = document.getElementById('newTask').value;
    db.collection("tasks").add({
        task: inputValue,
        completed: false
    })
    .then(() => {
        console.log("Document successfully written!");
        document.getElementById('newTask').value = ''; // clear input field
        loadTasks(); // reload tasks
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });
}

function updateTaskStatus(taskId, isCompleted) {
    db.collection("tasks").doc(taskId).update({
        completed: isCompleted
    })
    .then(() => {
        console.log("Document successfully updated!");
    })
    .catch((error) => {
        console.error("Error updating document: ", error);
    });
}

function loadTasks() {
    db.collection("tasks").onSnapshot((querySnapshot) => {
        var tasks = '';
        querySnapshot.forEach((doc) => {
            tasks += `<li>
                        <input type="checkbox" ${doc.data().completed ? 'checked' : ''} 
                               onchange="updateTaskStatus('${doc.id}', this.checked)">
                        ${doc.data().task}
                        <button onclick="deleteTask('${doc.id}')">Delete</button>
                      </li>`;
        });
        document.getElementById('taskList').innerHTML = tasks;
    });
}

function deleteTask(taskId) {
    if (confirm("Are you sure you want to delete this task?")) {
        db.collection("tasks").doc(taskId).delete()
        .then(() => {
            console.log("Document successfully deleted!");
            loadTasks(); // Refresh the task list
        })
        .catch((error) => {
            console.error("Error removing document: ", error);
        });
    }
}


document.addEventListener('DOMContentLoaded', function() {
    loadTasks();
});
