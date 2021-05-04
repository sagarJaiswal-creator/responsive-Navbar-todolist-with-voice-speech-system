const userInput = document.querySelector(".user-input");
const addBtn = document.querySelector("#addBtn");
const todoList = document.querySelector(".todo-list");
const deleteItem = document.querySelector(".deleteBtn");
const burger = document.querySelector(".burger");

//burger animation
function slider() {
  const burger = document.getElementById("burger");
  const navLinks = document.querySelector(".nav-links");
  burger.addEventListener("click", () => {
    console.log("hi");
    navLinks.classList.toggle("nav-active");
    console.log(navLinks);
    burger.classList.toggle("toggle");
    console.log(burger);
  });
}
//TODO LIST
//
//MOUSE CLICK EVENT
addBtn.addEventListener("click", function addItem() {
  //getting user input value
  var todoItem = userInput.value;
  var t = document.createTextNode(todoItem);
  console.log(todoItem);
  if (todoItem === "" || todoItem === " " || todoItem === "  ") {
    alert("you naeed to enter something");
  } else {
    //creating new items
    var addListItem = document.createElement("div");
    addListItem.classList.add("todo");

    var creatingLi = document.createElement("li");
    creatingLi.appendChild(t);

    var createingBtn1 = document.createElement("button");
    createingBtn1.innerHTML = '<i class="fas fa-check"></i>';
    createingBtn1.classList.add("check");

    var createingBtn2 = document.createElement("button");
    createingBtn2.classList.add("deleteBtn");
    createingBtn2.innerHTML = '<i class="far fa-trash-alt"></i>';

    addListItem.appendChild(creatingLi);
    addListItem.appendChild(createingBtn1);
    addListItem.appendChild(createingBtn2);
    todoList.appendChild(addListItem);

    console.log(todoList);
  }
  userInput.value = "";
});

//ENTER KEY EVENT
userInput.addEventListener("keyup", function addItem(event) {
  if (event.keyCode === 13) {
    //getting user input value
    var todoItem = userInput.value;
    var t = document.createTextNode(todoItem);
    console.log(todoItem);
    if (todoItem === "" || todoItem === " " || todoItem === "  ") {
      alert("you naeed to enter something");
    } else {
      //creating new items
      var addListItem = document.createElement("div");
      addListItem.classList.add("todo");

      var creatingLi = document.createElement("li");
      creatingLi.appendChild(t);

      var createingBtn1 = document.createElement("button");
      createingBtn1.innerHTML = '<i class="fas fa-check"></i>';
      createingBtn1.classList.add("check");

      var createingBtn2 = document.createElement("button");
      createingBtn2.classList.add("deleteBtn");
      createingBtn2.innerHTML = '<i class="far fa-trash-alt"></i>';

      addListItem.appendChild(creatingLi);
      addListItem.appendChild(createingBtn1);
      addListItem.appendChild(createingBtn2);
      todoList.appendChild(addListItem);

      console.log(todoList);
    }

    userInput.value = "";
  }
});

//adding function to delete button
todoList.addEventListener("click", deleteCheckBtn);
todoList.addEventListener("keyup", deleteCheckBtn);
function deleteCheckBtn(e) {
  const item = e.target;
  // DELETE ITEM
  if (item.classList[0] === "deleteBtn") {
    let todo = item.parentElement;
    todo.classList.add("animate");
    todo.addEventListener("transitionend", () => {
      todo.remove();
    });
  }

  //CHECK ITEM
  if (item.classList[0] === "check") {
    let todo = item.parentElement;
    todo.classList.toggle("done");
    console.log(todo);
  }
}
slider();

//VOICE SPEECH
const btn = document.querySelector(".mic");

btn.addEventListener("click", () => {
  const content = document.querySelector(".content");

  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition = new SpeechRecognition();
  recognition.onstart = () => {
    console.log("voice activated");
  };

  recognition.onresult = (event) => {
    console.log(event);
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    console.log(transcript);
    const getText = document.createTextNode(transcript);

    //creating new items
    var addListItem = document.createElement("div");
    addListItem.classList.add("todo");

    var creatingLi = document.createElement("li");
    creatingLi.appendChild(getText);

    var createingBtn1 = document.createElement("button");
    createingBtn1.innerHTML = '<i class="fas fa-check"></i>';
    createingBtn1.classList.add("check");

    var createingBtn2 = document.createElement("button");
    createingBtn2.classList.add("deleteBtn");
    createingBtn2.innerHTML = '<i class="far fa-trash-alt"></i>';

    addListItem.appendChild(creatingLi);
    addListItem.appendChild(createingBtn1);
    addListItem.appendChild(createingBtn2);
    todoList.appendChild(addListItem);

    console.log(todoList);
  };
  recognition.start();
});
