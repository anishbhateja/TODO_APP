const express = require("express");
const port = 8000;

const db = require("./config/mongoose");
const Task = require("./models/task");

const app = express();

//TEMPLATE ENGINE
app.set("view engine", "ejs");
app.set("views", "./view");

//MIDDLEWARE
app.use(express.urlencoded());
app.use(express.static("assets"));

//CONTROLLER

app.get("/", function (req, res) {
  Task.find({}, function (err, tasks) {
    if (err) {
      console.log("error in fetching tasks from the database");
      return;
    }
    return res.render("home", {
      task_list: tasks,
    });
  });
});

app.post("/create-task", function (req, res) {
  Task.create(
    {
      task: req.body.description,
      date: req.body.date,
      nature: req.body.category,
    },
    function (err, newTask) {
      if (err) {
        console.log("error in creating contact !");
      } else {
        console.log("********", newTask);
        return res.redirect("back");
      }
    }
  );
});

app.get("/delete-task", function (req, res) {
  console.log(req.query);
  var id = req.query;
  console.log(id);

  // to check the number of tasks to be deleted
  var count = Object.keys(id).length;
  for (let i = 0; i < count; i++) {
    // deleting the task from the database by using their individual ids
    Task.findByIdAndDelete(Object.keys(id)[i], function (err) {
      if (err) {
        console.log("error in deleting the task");
      }
    });
  }
  return res.redirect("back");
});

app.listen(port, function (err) {
  if (err) {
    console.log("Error is running the express server err:", err);
  } else {
    console.log("Express Server is running on port:", port);
  }
});
