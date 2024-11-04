import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

interface TaskDetailType {
    id: number;
    title: string;
    completed: boolean;
};


const TaskDetail: React.FC = () => {
    const { id } = useParams<{ id: string}>();
    const [task, setTask] = useState<TaskDetailType | null>(null);

    useEffect(() => {
        const fetchTaskDetail = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
                const data = await response.json();
                setTask(data);
            } catch (error) {
                console.error('שגיאה בקריאה לשרת', error);
            }
        };
        fetchTaskDetail();
    }, [id]);

    if (!task) return <p>Loading...</p>

    return(
        <div>
            <h1>Task Detail</h1>
            <p>Title: {task.title}</p>
            <p>Status: {task.completed ? 'Completed' : 'pending'}</p>
            <Link to={`/users/${task.id}/tasks`}>Back to Users Tasks</Link>
             <br />  
             <Link to="/users">Back to Users</Link>
        </div>
    );
};

export default TaskDetail;