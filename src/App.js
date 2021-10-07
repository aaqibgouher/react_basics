import Header from './components/Header';
import {useState} from 'react';
import ListTask from './components/ListTask';
import AddTask from './components/AddTask';

function App() {

  const [showForm, setForm] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      desc: "this is task1",
      status: true
    },
    {
      id: 2,
      desc: "this is task2",
      status: false
    },
    {
      id: 3,
      desc: "this is task3",
      status: false
    }
  ])

  const deleteTodo = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  const toggleStatus = (id) => {
    setTasks(
      tasks.map((task) => task.id === id ? { ...task, status: !task.status } : task)
    )
  }

  const addTask = (task) => {
    const new_task = {
      id: tasks.length + 1,
      desc: task.task,
      status: task.remainder
    }
    
    setTasks([...tasks, new_task]);
  }

  const toggleForm = () => {
    setForm(!showForm);
  }

  return (
    <div className="container">
      <div className="mt-5 col-sm-6 offset-sm-3 col-lg-6 offset-lg-3 col-xs-6 offset-xs-3 p-5" style={{ border: "2px solid grey" }}>
        <Header title="TODO APP" onToggleForm={toggleForm} showFormProps={showForm}/>
        {showForm && <AddTask onAdd={addTask}/>}
        { tasks && tasks.length && tasks.length > 0 ? <ListTask tasks={tasks} onDelete={deleteTodo} onToggle={toggleStatus}/> : <h5 className="mt-5">No Todos Found</h5> }
      </div> 
    </div>
  )
}

export default App;
