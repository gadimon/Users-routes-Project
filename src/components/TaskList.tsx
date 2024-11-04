import React from 'react';
import { Link } from 'react-router-dom';

interface Task {
  id: number;
  title: string;
}

interface TaskListProps {
  tasks: Task[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Link to={`/tasks/${task.id}`}>{task.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
