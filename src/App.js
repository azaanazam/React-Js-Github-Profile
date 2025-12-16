import React, { useEffect, useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (username === "") return;

    fetch(`https://api.github.com/users/${username}`)
      .then((resp) => resp.json())
      .then((data) => {
        setUserData(data);
      });
  }, [username]);

  return (
    <div>
      <input type="text" placeholder="GitHub username" onChange={(e) => setInputValue(e.target.value)}/>

      <button onClick={() => setUsername(inputValue)}>Search</button>

      {userData && (
        <div className="card">
          <img src={userData.avatar_url} alt=""/>
          <h2>{userData.name}</h2>
          <p>Followers: {userData.followers}</p>
          <p>Following: {userData.following}</p>
          <p>Repos: {userData.public_repos}</p>
        </div>
      )}
    </div>
  );
}

export default App;
