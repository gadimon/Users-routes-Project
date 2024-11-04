import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Users from './pages/Users';
import UserDetail from './pages/UserDetail';
import UserTasks from './pages/UserTasks';
import TaskDetail from './pages/TaskDetail';
import Products from './pages/Products';
import './styles/App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="container">
        <NavBar />
        <Routes>
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<UserDetail />} />
          <Route path="/users/:id/tasks" element={<UserTasks />} />
          <Route path="/tasks/:id" element={<TaskDetail />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
