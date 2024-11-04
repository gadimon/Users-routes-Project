import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

interface Task {
    id: number;
    title: string;
    completed: boolean;
};

const UserTasks: React.FC = () => {
    const { id } = useParams<{ id: string}>();
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        const fetchTasc = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${id}`);
                const data = await response.json();
                setTasks(data);
            } catch (error) {
                console.error('שגיאה בקריאה לשרת', error);
            }
        };
        fetchTasc();
    }, [id]);

    return(
        <div>
            <h1>Taskfor user {id}</h1>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <Link to={`/tasks/${task.id}`}>{task.title}</Link>
                    </li>
                ))}
            </ul>
            <Link to="/users">Back to Users</Link>
        </div>
    );
};

export default UserTasks;