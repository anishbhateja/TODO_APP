// adding green border to the input when input is not empty
var form = document.getElementById("form");
var taskInput = document.getElementById("description");
form.addEventListener("submit", function (e) {
  if (taskInput.value != "") {
    form.classList.add("success");
  }
});

//adding line through on the tasks that has to be deleted
var taskBox = document.querySelectorAll(".task-box");
var input = document.querySelectorAll(".task-box input");
var label = document.querySelectorAll(".task-box label");

for (let i = 0; i < input.length; i++) {
  input[i].addEventListener("click", function () {
    taskBox[i].classList.add("slashed");
    label[i].classList.add("slashed");
  });
}
