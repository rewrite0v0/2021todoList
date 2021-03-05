const mainInput = document.querySelector(".mainInput");
const mainTodo = document.querySelector(".mainTodo");

const addTodo = (input) => {
  input.addEventListener("keyup", (inputkey) => {
    if (input.textLength !== 0 && inputkey.keyCode === 13) {
      inputkey.preventDefault();
      const makeContainer = document.createElement("div");
      makeContainer.classList.add("todoWrap");
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
      removeTarget.remove();
    } else {
      return 0;
    }
  });
};

const completeTodo = () => {
  addEventListener("click", (e) => {
    const finder = e.target;
    const picker_on = finder.classList[0];
    const picker_off = finder.classList[1];

    if (picker_off === "todoDone") {
      finder.style.textDecorationLine = "none";
      finder.classList.remove("todoDone");
    } else if (picker_on === "todo-item") {
      finder.style.textDecorationLine = "line-through";
      finder.classList.add("todoDone");
    } else {
      return 0;
    }
  });
};

const focus = (here) => {
  here.focus();
};

const init = () => {
  focus(mainInput);
  addTodo(mainInput);
  removeTodo();
  completeTodo();
};

init();
