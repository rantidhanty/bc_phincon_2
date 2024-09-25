import './App.css';
import {useState, useEffect} from 'react';


/**
 * useState adalah function
 * @returns funtion global
 */
function App() {
  const [theme, setTheme] = useState("light"); //useState tema
  const [tasks, setTask] = useState(() => { //useState tasks
    const saveTasks = localStorage.getItem('tasks'); //pakai method getItem yang menyimpan dari useState tasks di tampung di variabel
    return saveTasks ? JSON.parse(saveTasks) : []; //mengembalikan saveTasks menggunakan operator ternary
  });
  const [newTask, setnewTask] = useState(""); //useState untuk newTask

  //funct. ubah tema
  function changeTheme() {
    if (theme === "light") {
      setTheme("App-dark");
    } else {
      setTheme("light");
    }
  }

  //funct. addTask
  function addTask() {
    if (newTask.trim() !== "") { //menggunakan method trim menghapus spasi
      const updatedTasks = [...tasks, newTask]; // menampung variabel updateTask
      setTask(updatedTasks);
      setnewTask("");
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }
  }

  // Fungsi untuk menghapus tugas
  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
    setTask(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className={theme === 'light' ? 'App' : 'App-dark'}>
      <div>
        <p>To-Do List</p>
      </div>
      <div>
        <button onClick={changeTheme}>Switch to dark app</button>
      </div>
      <div>
        <input
          placeholder="Add a new task"
          value={newTask}
          onChange={(e) => setnewTask(e.target.value)}
        ></input>
      </div>
      <div>
        <button onClick={addTask}>Add task</button>
      </div>
      {tasks.map((task, index) => (
        <div key={index}>
          <span>{task}</span>
          <button onClick={() => deleteTask(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default App;
