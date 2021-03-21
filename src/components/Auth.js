import { useEffect, useState } from "react";
export function Auth() {
  const [user, updateUser] = useState({
    username: "",
    email: "",
  });

  const [users, setUsers] = useState({
    all: [],
  });

  const handleChange = (key, value) => {
    updateUser({ [key]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      `https://jsonplaceholder.typicode.com/users?username=${user.username}`
    )
      .then((response) => response.json())
      .then((users) => console.log(users));
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="post-title" className="form-label">
          username
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
          email:
        </label>
        <textarea
          className="form-control"
          id="post-body"
          onChange={(e) => handleChange("email", e.target.value)}
          value={user.email}
          rows="3"
        ></textarea>
      </div>
      <button className="btn btn-danger">Login</button>
    </form>
  );
}
