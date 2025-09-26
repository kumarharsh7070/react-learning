import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
        className="border-2 rounded-1xl border-black m-2"
      />
      {'  '}
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
        className="border-2 rounded-1xl border-black m-2"
      />
      <button onClick={handleSubmit} className="border-2 rounded-1xl border-black m-2 bg-emerald-500 text-blue-700">Submit</button>
    </div>
  );
}

export default Login;
