const mainInput = document.querySelector(".mainInput");
const mainTodo = document.querySelector(".mainTodo");

const addTodo = (input) => {
  input.addEventListener("keyup", (inputkey) => {
    if (input.textLength !== 0 && inputkey.keyCode === 13) {
      inputkey.preventDefault();
      const makeContainer = document.createElement("div");
      makeContainer.classList.add("todoContainer");
      mainTodo.appendChild(makeContainer);

      const makeLi = document.createElement("li");
      makeLi.classList.add("todo-item");
      makeLi.textContent = input.value;
      makeContainer.appendChild(makeLi);
      input.value = "";

      const makeDeleteButton = document.createElement("button");
      makeDeleteButton.classList.add("todoDelete");
      makeLi.appendChild(makeDeleteButton).textContent = `❌`;
    } else {
      return 0;
    }
  });
};

const removeTodo = () => {
  addEventListener("click", (e) => {
    const finder = e.target;
    const removeTarget = finder.parentElement;
    if (finder.classList[0] === "todoDelete") {
      // console.log(removeTarget);
      removeTarget.remove();
    } else {
      return 0;
    }
  });
};

const init = () => {
  addTodo(mainInput);
  removeTodo();
};

init();
