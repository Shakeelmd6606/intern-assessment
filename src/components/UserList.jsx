import React, { useState, useEffect } from 'react';
import data from '../data.json'; // Import the local data
import UserItem from './UserItem';
import UserForm from './UserForm';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [notification, setNotification] = useState('');

  useEffect(() => {
    // Load initial data from data.json
    setUsers(data);
  }, []);

  const addUser = (user) => {
    // Check if the user already exists (by name or email)
    const existingUser = users.find(
      (u) => u.name === user.name || u.email === user.email
    );
    
    if (existingUser) {
      setNotification('This user already exists.');
      return;
    }

    setNotification('');
    setUsers([...users, { ...user, id: Date.now() }]);
  };

  const updateUser = (updatedUser) => {
    setUsers(users.map((user) => (user.id === updatedUser.id ? updatedUser : user)));
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };

  const handleUserDeselect = () => {
    setSelectedUser(null);
  };

  return (
    <div>
      <h1>User Management</h1>
      <UserForm
        addUser={addUser}
        updateUser={updateUser}
        selectedUser={selectedUser}
        onDeselect={handleUserDeselect}
      />
      {notification && <p style={{ color: 'red' }}>{notification}</p>}
      <ul>
        {users.map((user) => (
          <UserItem key={user.id} user={user} deleteUser={deleteUser} onSelect={handleUserSelect} />
        ))}
      </ul>
    </div>
  );
};

export default UserList;
