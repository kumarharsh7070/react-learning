import React, { useState, useEffect } from 'react';

function Github() {
  const [data, setData] = useState({});       // user info
  const [followers, setFollowers] = useState([]); // followers array
  const username = "kumarharsh7070"; 

  useEffect(() => {
    // Fetch user info for follower count
    fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching user data:', error));

    // Fetch followers list
    fetch(`https://api.github.com/users/${username}/followers`)
      .then(res => res.json())
      .then(data => setFollowers(data))
      .catch(error => console.error("Error fetching followers:", error));

  }, []);

  return (
    
    <div className="p-4">
      {/* Follower count */}
      <h1 className="text-2xl font-bold text-fuchsia-950 bg-cyan-400 p-2 rounded mb-4">
        Github Followers: {data.followers || 0}
      </h1>
 <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
    <img src={data.avatar_url} alt="Git Picture" width={300} />
 </div>
      {/* Followers list */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Followers List:</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {followers.map(follower => (
            <a
              key={follower.id}
              href={follower.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-2 border rounded hover:shadow-lg"
            >
              <img
                src={follower.avatar_url}
                alt={follower.login}
                className="w-16 h-16 rounded-full mb-2"
              />
              <p className="text-sm font-medium">{follower.login}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Github;
