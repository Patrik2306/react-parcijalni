import React, { useState } from 'react';

function UserForm({ onUsernameSubmit }) {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onUsernameSubmit(username);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub username"
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default UserForm;
