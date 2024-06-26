import React, { useState } from "react";
import TaskForm from "./TaskForm";
import Task from "./Task";
import "../style-sheet/ListTasks.css";

function ListTasks() {
  const [tasks, setTasks] = useState([]);

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') {
      return task.completed;
    } else if (filter === 'pending') {
      return !task.completed;
    } else {
      return true; // 'all' filter
    }
  })

  const addTask = (task) => {
    //console.log(task);
    if (task.text.trim()) {
      console.log(tasks)
      task.text = task.text.trim();
      const actualizedTask = [task, ...tasks];
      setTasks(actualizedTask);
    }
  };
  const deleteTask = id => {
    const actualizedTask = tasks.filter(task => task.id !== id);
    setTasks(actualizedTask);
  }
  const completeTask = id => {
    const actualizedTask = tasks.map(task => {
        if (task.id === id) {
            task.completed = !task.completed;
        }
        console.log(task.completed)
        return task;
  })
  setTasks(actualizedTask);
}

  return (
    <>
      <TaskForm onSumbit={addTask} />
      <div className="filter-buttons">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
        <button onClick={() => setFilter("pending")}>Pending</button>
      </div>
      <div className="task-list-cont">
        {tasks.map((task) => (
          <Task
            text={task.text}
            completed={task.completed}
            key={task.id}
            id={task.id}
            deleteTask={deleteTask}
            completeTask={completeTask}
          />
        ))}
      </div>
    </>
  );
}
export default ListTasks;
