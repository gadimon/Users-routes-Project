import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

interface UserDetailType  {
    id: number;
    name: string;
    email: string;
    phone: string;
    address: {
        street: string;
        city: string;
        zipcode: string;
    };
};

const UserDetail: React.FC =() => {
    const { id } = useParams<{ id: string }>();
    const [user, setUser] = useState<UserDetailType | null>(null);

    useEffect(() => {
        const fetchUserDetail = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
                const data = await response.json();
                setUser(data);
            } catch (error) {
                console.error('שגיאה בקריאה לשרת', error);
            }
        };
        fetchUserDetail()
    }, [id]);

    if (!user) return <p>Loading...</p>

    return(
        <div>
            <h1>{user.name}</h1>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Address: {user.address.street}, {user.address.city}, {user.address.zipcode}</p>
            <Link to={`/users/${id}/tasks`}>View Tasks</Link>
            <br />
            <Link to='/users'>Back to Users</Link>
        </div>
    );
};

export default UserDetail;