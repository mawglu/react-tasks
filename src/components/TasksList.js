import React, {useEffect, useState} from 'react';
import axios from 'axios';

const TasksList = () => {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        // Получаем данные с сервера
        axios.get('http://localhost:3000/tasks')
            .then(res => setTasks(res.data))// Сохраняем данные в state
            .catch(err => console.error('Ошибка при получении задач:', err))
    }, []);

    return (<div>
        <h1>Список задач</h1>
        <ul>
            {tasks.map((task, index) => (<li key={index}>
                {task.title} {task.completed ? '(Выполнено)' : '(Не выполнено)'}
            </li>))}
        </ul>
    </div>)
};

export default TasksList;