import React, {useState} from 'react';
import axios from 'axios';

const AddTask = () => {
    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Отправка POST-запроса на сервер
        axios.post('http://localhost:3000/tasks', {title})
            .then(response => {
                console.log('Задача добавлена:', response.data);
                setTitle(''); // Очистить поле после отправки
            })
            .catch(error => {
                console.error('Ошибка при добавлении задачи:', error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Название задачи"
            />
            <button type="submit">Добавить задачу</button>
        </form>
    );
};

export default AddTask;
