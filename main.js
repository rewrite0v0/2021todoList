const mainInput = document.querySelector(".mainInput");
const mainButton = document.querySelector(".mainButton");
const mainTodo = document.querySelector(".mainTodo");

const addTodo = (button, input) => {
  button.addEventListener("click", (click) => {
    click.preventDefault();

    if (input.textLength !== 0) {
      const makeContainer = document.createElement("div");
      makeContainer.classList.add("todoContainer");
      mainTodo.appendChild(makeContainer);

      const MakeLi = document.createElement("li");
      MakeLi.classList.add("todo");
      MakeLi.textContent = input.value;
      makeContainer.appendChild(MakeLi);

      const makeCompleteButton = document.createElement("button");
      makeCompleteButton.classList.add();
      MakeLi.appendChild(makeCompleteButton).textContent = `완료`;

      const makeReplaceButton = document.createElement("button");
      makeReplaceButton.classList.add();
      MakeLi.appendChild(makeReplaceButton).textContent = `수정`;

      const makeDeleteButton = document.createElement("button");
      makeDeleteButton.classList.add();
      MakeLi.appendChild(makeDeleteButton).textContent = `삭제`;
    } else {
      return 0;
    }
  });
};

// const removeTodo = (button) => {
//   button.addEventListener("click", (removeTodo) => {
//     removeTodo.remove();
//   });
// };

const changeTodo = () => {};

const completeTodo = () => {};

const init = () => {
  addTodo(mainButton, mainInput);
  // removeTodo();
  // changeTodo();
  // completeTodo();
};

init();
