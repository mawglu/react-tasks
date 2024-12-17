import './App.css';
import TasksList from "./components/TasksList";
import AddTask from "./components/AddTask";

function App() {
    return (
        <div className="App">
            <h1>Мое приложение с задачами</h1>
            <AddTask/>
            <TasksList/>
        </div>
    );
}

export default App;
