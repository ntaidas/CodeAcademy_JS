import ToDo from "./modules/list_v4.js";



if (localStorage.getItem("tasks")) {
  const tasks = JSON.parse(localStorage.getItem("tasks"));
  console.log(tasks);
  tasks.forEach((task,i) => {
    const taskList = new ToDo(task);
    console.log(task.id);
    const oldListItemsNode = document.querySelectorAll('li');
    console.dir(oldListItemsNode)
    const oldListItems = Array.from(oldListItemsNode)
    console.dir((oldListItems))
     if(task.status == true){
       oldListItems[i].classList.add('done')
     }
    
  });
  //
}


// const toDoList = document.querySelectorAll('li')
// function updateData() {
//   const tickButton = document.querySelectorAll(".tick");
//   tickButton.forEach((button, i) => {
//     button.addEventListener("click", () => {
//       if (tasks[i].status === false) {
//         tasks[i].status = true;
//         console.log(tasks[i]);
//         toDoList[i].classList.add("done");
//         localStorage.setItem("tasks", JSON.stringify(tasks));
//       } else {
//         toDoList[i].classList.remove("done");
//         tasks[i].status = false;
//         console.log(tasks[i]);
//         localStorage.setItem("tasks", JSON.stringify(tasks));
//       }
//     });
//   });
//   console.log(tasks);
// }

// .addEventListener('click', e => {
//   console.log('penis')
// })



document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.target.elements.addTask.value);
  const newTask = {
    id: Date.now(),
    task: e.target.elements.addTask.value,
    status: false,
  };
   const tasks = JSON.parse(localStorage.getItem("tasks"))
     ? JSON.parse(localStorage.getItem("tasks"))
     : [];
  tasks.push(newTask);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  const taskObj = new ToDo(newTask);
  e.target.reset();
});

// const newTasks = tasks.map((task) => task.status == true);
// localStorage.setItem("tasks", JSON.stringify(newTasks));