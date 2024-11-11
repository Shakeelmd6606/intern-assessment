import React, { useState, useEffect } from 'react';

const UserForm = ({ addUser, updateUser, selectedUser, onDeselect }) => {
  const [user, setUser] = useState({ name: '', email: '', dob: '' });

  useEffect(() => {
    if (selectedUser) {
      setUser(selectedUser);
    } else {
      setUser({ name: '', email: '', dob: '' });
    }
  }, [selectedUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.id) {
      updateUser(user);
      onDeselect();
    } else {
      addUser(user);
    }
    setUser({ name: '', email: '', dob: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        required
      />
      <input
        type="date"
        placeholder="Date of Birth"
        value={user.dob}
        onChange={(e) => setUser({ ...user, dob: e.target.value })}
        required
      />
      <button type="submit">{user.id ? 'Update' : 'Add'} User</button>
      {user.id && (
        <button type="button" onClick={onDeselect}>Cancel Edit</button>
      )}
    </form>
  );
};

export default UserForm;
