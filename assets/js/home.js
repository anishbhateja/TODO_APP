// adding green border to the input when input is not empty
var form = document.getElementById("form");
var taskInput = document.getElementById("description");
form.addEventListener("submit", function (e) {
  if (taskInput.value != "") {
    form.classList.add("success");
  }
});

//adding line through on the tasks that has to be deleted
var taskBox = document.querySelectorAll(".task-box .calender");
var input = document.querySelectorAll(".task-box input");
var label = document.querySelectorAll(".task-box label h5");

for (let i = 0; i < input.length; i++) {
  input[i].addEventListener("click", function () {
    if (input[i].checked === true) {
      label[i].classList.add("slashed");
      taskBox[i].className = "slashed";
    } else {
      label[i].classList.remove("slashed");
      taskBox[i].classList.remove("slashed");
    }
  });
}

//Changing color of buttons depending upon the nature of task choosen

var tbButton = document.querySelectorAll(".task-box button");
for (let i = 0; i < tbButton.length; i++) {
  if (tbButton[i].innerText === "Personal") {
    tbButton[i].className = "btn btn-success";
  }
  if (tbButton[i].innerText === "Work") {
    tbButton[i].className = "btn btn-danger";
  }
  if (tbButton[i].innerText === "School") {
    tbButton[i].className = "btn btn-primary";
  }
  if (tbButton[i].innerText === "Others") {
    tbButton[i].className = "btn btn-primary";
  }
}
