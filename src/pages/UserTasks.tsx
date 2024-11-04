import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TaskList from '../components/TaskList';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const UserTasks: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${id}`);
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, [id]);

  return (
    <div>
      <h1>Tasks for User {id}</h1>
      <TaskList tasks={tasks} />
    </div>
  );
};

export default UserTasks;
