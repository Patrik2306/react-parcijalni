import React, { useState } from 'react';
import UserForm from './components/UserForm';
import UserDetails from './components/UserDetails';
import './App.css';

function App() {
  const [userData, setUserData] = useState(null);
  const [userRepos, setUserRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUserData = async (username) => {
    setLoading(true);
    try {
      const userResponse = await fetch(`https://api.github.com/users/${username}`);
      const userData = await userResponse.json();

      const reposResponse = await fetch(`https://api.github.com/users/${username}/repos`);
      const reposData = await reposResponse.json();

      setUserData(userData);
      setUserRepos(reposData);
    } catch (error) {
      console.error("Error fetching GitHub data:", error);
    }
    setLoading(false);
  };

  return (
    <div className="App">
      <UserForm onUsernameSubmit={fetchUserData} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        userData && <UserDetails user={userData} repos={userRepos} />
      )}
    </div>
  );
}

export default App;

