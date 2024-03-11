import { useState } from 'react';
import './App.css';
function App() {
  //Variable declaration.
  const [todolist, setTodo] = useState("");
  const [newTask, setTask] = useState([]);
  const addTask = (event) => {
    setTodo(event.target.value);
  }
  const displayTask = () => {
    const task = {
      id: newTask.length === 0 ? 1 : newTask[newTask.length - 1].id + 1,
      taskName: todolist,
      complete: false,
    };
    const newTodo = [...newTask, task];
    setTask(newTodo);
  }
  const deleteTask = (id) => {
    const newTodo = newTask.filter((taskb) => taskb.id !== id);
    setTask(newTodo);
  }
  const updateTask = (id) => {
    const updateWork = newTask.map((task) => {
      if (task.id === id) {
        return { ...task, complete: true };

      }
      else {
        return task;
      }
    })
    setTask(updateWork);
  }
  return (

    <div div className='App' >
      <div className='addInputs' style={{ backgroundColor: "skyblue", padding: 55 }}>

        <input style={{ padding: 10 }} onChange={addTask} />
        <button style={{ marginLeft: 10, padding: 10 }} onClick={displayTask}>Add my Task</button>
      </div>

      {newTask.map((taska) => {

        return (

          <div className='listTask' style={{ textDecoration: taska.complete ? "line-through" : "" }}>
            <h1>{taska.taskName}</h1>
            <button onClick={() => deleteTask(taska.id)}>  X </button>
            <button onClick={() => updateTask(taska.id)}>Completed</button>
          </div>
        )
      })}
    </div>

  );

}
//Components is a Function which returns us a UI.
//Props are the object 
export default App;

