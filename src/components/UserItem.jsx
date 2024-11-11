import React from 'react';

const UserItem = ({ user, deleteUser, onSelect }) => {
  return (
    <li>
      <span>{user.name} - {user.email} - {user.dob}</span>
      <button className='edit' onClick={() => onSelect(user)}>Edit</button>
      <button  className='delete' onClick={() => deleteUser(user.id)}>Delete</button>
    </li>
  );
};

export default UserItem;
