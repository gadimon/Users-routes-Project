import React, { useEffect, useState } from 'react';
import UserList from '../components/UserList';

interface User {
  id: number;
  name: string;
}

const Users: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Users Page</h1>
      <UserList users={users} />
    </div>
  );
};

export default Users;

