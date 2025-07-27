const AddBtn = document.getElementById("Add");
      
AddBtn.addEventListener("click", () =>{
  const inputval = document.getElementById("input");
  let value = inputval.value.trim();
  const note = document.createElement("div");
  const deletbtn = document.createElement("div");
  deletbtn.className = "Delete";
  const deletimg = document.createElement("img");
  deletimg.src = "https://cdn4.iconfinder.com/data/icons/for-your-interface-part-3/128/Trash-512.png";
  deletimg.className = "delete_img"
  note.className = "notes";
  if (value.length > 0){
  const notText = document.createElement("span");
  notText.textContent = value;
  
  deletbtn.appendChild(deletimg);
  note.appendChild(notText);
  note.appendChild(deletbtn);
  document.querySelector(".Todolist").appendChild(note);
  inputval.value = "";
  saveTaskToLocalStorage(value);

  deletbtn.addEventListener("click", () =>{
    note.remove();
    deleteFromLOcalStorage(value);
  });

  }
 
})

function deleteFromLOcalStorage(taskText){
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = tasks.filter(task => task !== taskText);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function saveTaskToLocalStorage(task){
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks))
}
window.addEventListener("DOMContentLoaded", loadTaskFromLocalStorage);
function loadTaskFromLocalStorage(){
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(task =>{
    addTaskToDom(task);

  });
}
function addTaskToDom(taskText) {
const note = document.createElement("div");
note.className = "notes";

const notText = document.createElement("span");
notText.textContent = taskText;

const deletbtn = document.createElement("div");
deletbtn.className = "Delete";

const deletimg = document.createElement("img");
deletimg.src = "https://cdn4.iconfinder.com/data/icons/for-your-interface-part-3/128/Trash-512.png";
deletimg.className = "delete_img";

deletbtn.appendChild(deletimg);
note.appendChild(notText);
note.appendChild(deletbtn);
document.querySelector(".Todolist").appendChild(note);

deletbtn.addEventListener("click", () => {
note.remove();
deleteFromLOcalStorage(taskText);
});
}
