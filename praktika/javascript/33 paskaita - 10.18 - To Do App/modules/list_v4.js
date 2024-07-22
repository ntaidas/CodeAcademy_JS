export default class ToDo {
  constructor(props) {
    this.id = props.id;
    this.task = props.task;
    this.status = props.status;
    return this.display();
  }
  display() {
    const listItem = document.createElement("li");
    listItem.classList.add("container");
    document.querySelector("ul").appendChild(listItem);
    const tick = document.createElement("button");
    const tickImg = document.createElement("img");
    tickImg.setAttribute("src", "./svg/check-solid.svg");
    tick.classList.add("tick");
    tick.appendChild(tickImg);
    tick.addEventListener("click", () => {
      this.toggleStatus(listItem, tickImg);
    });
    /////
    const edit = document.createElement("button");
    const editImg = document.createElement("img");
    edit.classList.add("edit");
    editImg.setAttribute("src", "./svg/pen-solid.svg");
    edit.appendChild(editImg);
    const span = document.createElement("span");
    const spanText = document.createTextNode(this.task);
    span.append(spanText, edit);
    edit.addEventListener("click", () => {
      this.editTask(span, edit, spanText, listItem, tickImg);
    });

    const bin = document.createElement("button");
    const binImg = document.createElement("img");
    binImg.setAttribute("src", "./svg/trash-solid.svg");
    bin.appendChild(binImg);
    bin.classList.add("bin");
    listItem.append(tick, span, bin);
    bin.addEventListener("click", () => {
      document.querySelector("ul").removeChild(listItem);
      const tasks = JSON.parse(localStorage.getItem("tasks"));
      const newTasks = tasks.filter((task) => task.id !== this.id);
      localStorage.setItem("tasks", JSON.stringify(newTasks));
    });
    return listItem;
  }
  toggleStatus(listItem, tickImg) {
    if (!this.status) {
      listItem.classList.add("done");
      this.status = true;
      tickImg.setAttribute("src", "./svg/rotate-solid.svg");
      console.log(this);
      const tasks = JSON.parse(localStorage.getItem("tasks"));
      const newTasks = tasks.filter((task) => task.id !== this.id);
      newTasks.push(this)
      localStorage.setItem("tasks", JSON.stringify(newTasks));


    } else {
      listItem.classList.remove("done");
      this.status = false;
      console.log(this.status);
      tickImg.setAttribute("src", "./svg/check-solid.svg");
      const tasks = JSON.parse(localStorage.getItem("tasks"));
      const newTasks = tasks.filter((task) => task.id !== this.id);
      newTasks.push(this)
      localStorage.setItem("tasks", JSON.stringify(newTasks));

    }
  }
  editTask(span, edit, spanText, listItem, tickImg) {
    listItem.classList.remove("done");
    tickImg.setAttribute("src", "./svg/check-solid.svg");
    const editForm = document.createElement("form");
    const formInput = document.createElement("input");
    formInput.setAttribute("type", "text");
    formInput.setAttribute("name", "editTaskTxt");
    formInput.setAttribute("id", "editTask");
    formInput.setAttribute("placeholder", this.task);
    const formSubmit = document.createElement("input");
    formSubmit.setAttribute("type", "submit");
    formSubmit.setAttribute("value", "redaguoti");
    editForm.append(formInput, formSubmit);
    span.appendChild(editForm);
    span.removeChild(edit);
    span.removeChild(spanText);
    console.log(editForm);
    editForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const edit = document.createElement("button");
      const editImg = document.createElement("img");
      edit.classList.add("edit");
      editImg.setAttribute("src", "./svg/pen-solid.svg");
      edit.appendChild(editImg);
      const spanText = document.createTextNode(
        e.target.elements.editTaskTxt.value
      );
      span.append(spanText, edit);
      span.removeChild(editForm);
      
      edit.addEventListener("click", () => {
        this.editTask(span, edit, spanText);
      });
    });
  }
}
