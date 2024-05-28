import React from 'react';

function UserDetails({ user, repos }) {
  return (
    <div>
      <h2>User Details</h2>
      <img src={user.avatar_url} alt="User Avatar" width="150" height="150" />
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Location:</strong> {user.location}</p>
      <p><strong>Bio:</strong> {user.bio}</p>
      <h3>Repositories</h3>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserDetails;
