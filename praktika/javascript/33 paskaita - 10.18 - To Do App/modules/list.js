export default class ToDo {
  constructor(props) {
    this.props=props;
    return this.display();
  }
  display() {
    const listItem = document.createElement("li");
    listItem.classList.add("container");
    document.querySelector("ul").appendChild(listItem);

    const tick = document.createElement("button");
    const tickImg = document.createElement("img");
    tickImg.setAttribute("src", "./svg/check-solid.svg");
    tick.appendChild(tickImg);
    tick.addEventListener("click", () => {
      if (!this.props.status) {
        listItem.classList.add("done");
        this.props.status = true;
        tickImg.setAttribute("src", "./svg/rotate-solid.svg");
      } else {
        listItem.classList.remove("done");
        this.props.status = false;
        tickImg.setAttribute("src", "./svg/check-solid.svg");
      }
    });

    const edit = document.createElement("button");
    const editImg = document.createElement("img");
    edit.classList.add("edit");
    editImg.setAttribute("src", "./svg/pen-solid.svg");
    edit.appendChild(editImg);
    const span = document.createElement("span");
    const spanText = document.createTextNode(this.props.task);
    span.append(spanText, edit);
    edit.addEventListener("click", () => {
      listItem.classList.remove("done");
      const editForm = document.createElement("form");
      const formInput = document.createElement("input");
      formInput.setAttribute("type", "text");
      formInput.setAttribute("name", "editTask");
      formInput.setAttribute("id", "editTask");
      formInput.setAttribute("placeholder", this.props.task);
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
          e.target.elements.editTask.value
        );
        span.append(spanText, edit);
        span.removeChild(editForm);
      });
    });

    const bin = document.createElement("button");
    const binImg = document.createElement("img");
    binImg.setAttribute("src", "./svg/trash-solid.svg");
    bin.appendChild(binImg);
    listItem.append(tick, span, bin);
    bin.addEventListener("click", () => {
      document.querySelector("ul").removeChild(listItem);
    });
  }
}
