import { useState } from "react";
export function Auth() {

  const [user, updateUser] = useState({
    username: "",
    email: "",
  });

  const [authenUser, updateAutehnUser] = useState({
    isAuthen: false,

  })

  const handleChange = (key, value) => {
    updateUser({ [key]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      `https://jsonplaceholder.typicode.com/users?username=${user.username}`
    )
      .then((response) => response.json())
      .then((fetchedUsers) => {

        if (fetchedUsers.length > 0) {
          updateAutehnUser({ ...fetchedUsers[0], isAuthen: true });
          signin();
        }

      });
  };

  const signin = () => {

  }

  if (authenUser.isAuthen) {

    return (<h1> Welcome {authenUser.name} </h1>)

  }
  else {

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
}
