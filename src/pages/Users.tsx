import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface User  {
    id: number;
    name: string;
};

const Users: React.FC= () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error('שגיאה בקריאה לשרת', error);
            }
        };
        fetchUsers();
    }, []);
    return (
        <div>
            <h1>Users Page</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <Link to={`/users/${user.id}`}>{user.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Users