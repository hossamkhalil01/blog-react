import { navigate, Router } from "@reach/router";
import { useState } from "react";
import { Createpost } from "./CreatePost";
import { FeaturedPosts } from "./FeaturedPosts";
import { Login } from "./Login";
import { Post } from "./Post";
import { PrivateRoute } from './privateRoute';
import { Profile } from "./Profile";
import { UserContext } from "./UserContext";

export function Auth() {

  const [authenUser, updateAutehnUser] = useState({
    isAuthen: false,
    errorMsg: "",
  });

  const handleSubmit = (userName, password) => {

    fetch(
      `https://jsonplaceholder.typicode.com/users?username=${userName}&email=${password}`
    )
      .then((response) => response.json())
      .then((fetchedUsers) => {
        if (fetchedUsers.length > 0) {
          updateAutehnUser({ ...fetchedUsers[0], isAuthen: true, errorMsg: "" });
          navigate("/");
        } else {
          navigate("/login");
          updateAutehnUser({ errorMsg: "Invalid username or password.", isAuthen: false });
        }
      });
  };

  return (
    <UserContext.Provider value={{ currentUser: authenUser }}>

      <Router>
        <PrivateRoute path="/">

          <FeaturedPosts path="/" />
          <Profile path="/profile" />
          <Post path="/posts/:id" />
          <Createpost path="/createPost/"></Createpost>
        </PrivateRoute>
        <Login handleLogin={handleSubmit} path="/login"></Login>
      </Router>
    </UserContext.Provider>
  );
}
