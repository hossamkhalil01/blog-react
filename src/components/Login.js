import { useState } from "react";

export function Login({ handleLogin }) {
  const [user, updateUser] = useState({
    username: "",
    email: "",
  });

  const handleChange = (key, value) => {
    updateUser({ ...user, [key]: value });
  };

  return (
    <div className="container">
      <div className="mb-3">
        <label htmlFor="post-title" className="form-label">
          Username
        </label>
        <input
          id="post-title"
          onChange={(e) => handleChange("username", e.target.value)}
          value={user.username}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="post-body" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="post-body"
          onChange={(e) => handleChange("email", e.target.value)}
          value={user.email}
        />
      </div>
      <button className="btn btn-danger " onClick={() => handleLogin(user.username, user.email)}>Login</button>
    </div>
  );
}
