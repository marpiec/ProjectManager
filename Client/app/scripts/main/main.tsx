import login = require("login/module");
import tasks = require("tasks/module");

//new login.LoginView().render();
//new tasks.TasksView().render();

React.render(
    <tasks.TasksView2></tasks.TasksView2>,
    document.getElementById('main')
);