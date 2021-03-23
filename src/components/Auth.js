import { useState } from "react";
import { UserContext } from "./UserContext"
import { Posts } from "./Posts";
import { navigate } from "@reach/router";
export function Auth() {
  const [user, updateUser] = useState({
    username: "",
    email: "",
  });

  const [authenUser, updateAutehnUser] = useState({
    isAuthen: false,
    errorMassage: "",
  });

  const handleChange = (key, value) => {
    updateUser({ ...user, [key]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      `https://jsonplaceholder.typicode.com/users?username=${user.username}&email=${user.email}`
    )
      .then((response) => response.json())
      .then((fetchedUsers) => {
        if (fetchedUsers.length > 0) {
			updateUser({...fetchedUsers[0]});
          updateAutehnUser({ ...fetchedUsers[0], isAuthen: true });
          signin();
        } else {
          updateAutehnUser({ isAuthen: false, errorMassage: "invalid user" });
        }
      });
  };

  const signin = () => {
	  navigate("/profile")
  };

  if (authenUser.isAuthen) {
    return (
		<UserContext.Provider value={{currentUser:authenUser}}>
			<div>
				<h1> Welcome {authenUser.name} </h1>
				<Posts userId={authenUser.id} />
			</div>
	  </UserContext.Provider>
    );
  } else {
    return (
      <div className="container">
        <form onSubmit={handleSubmit}>
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

          <button className="btn btn-danger">Login</button>
          <div style={{ color: "red", marginTop: "10px" }}>
            {authenUser.errorMassage}
          </div>
        </form>
      </div>
    );
  }
}
