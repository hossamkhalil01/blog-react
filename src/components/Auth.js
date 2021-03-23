import { navigate } from "@reach/router";
import { useState } from "react";
import { Posts } from "./Posts";
import { FeaturedPosts } from "./FeaturedPosts";
import { UserContext } from "./UserContext";
import { Createpost } from "./CreatePost";

const nav = navigate;

export function Auth() {

  const [user, updateUser] = useState({
    username: "",
    email: "",
  });

  const [authenUser, updateAutehnUser] = useState({
    isAuthen: false,
    errorMsg: "",
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
          updateUser({ ...fetchedUsers[0] });
          updateAutehnUser({ ...fetchedUsers[0], isAuthen: true });
        } else {
          updateAutehnUser({ isAuthen: false, errorMsg: "Invalid Username or Passwrod" });
        }
      });
  };

  if (authenUser.isAuthen) {

    return (
      <UserContext.Provider value={{ currentUser: authenUser }}>
        {/* <Posts userId={authenUser.id}></Posts> */}
        {/* <FeaturedPosts></FeaturedPosts> */}
        {/* <Post></Post> */}
        <Createpost userId ={authenUser.id}></Createpost>
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
            {authenUser.errorMsg}
          </div>
        </form>
      </div>
    );
  }
}
