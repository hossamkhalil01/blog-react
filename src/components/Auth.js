import { navigate, Redirect, redirectTo } from "@reach/router";
import { useState } from "react";
import { Posts } from "./Posts";
import { Post } from "./Post"
import { FeaturedPosts } from "./FeaturedPosts";
import { UserContext } from "./UserContext";
import { Createpost } from "./CreatePost";
import { Router } from "@reach/router";
import { PrivateRoute } from './privateRoute';
import { Login } from "./Login";
import { Profile } from "./Profile";
import { Header } from "./header";
export function Auth() {

  const [authenUser, updateAutehnUser] = useState({
    isAuthen: false,
    errorMsg: "",
  });

  

  const handleSubmit = (userName,password) => {
	  console.log(userName,password);
    fetch(
      `https://jsonplaceholder.typicode.com/users?username=${userName}&email=${password}`
    )
      .then((response) => response.json())
      .then((fetchedUsers) => {
        if (fetchedUsers.length > 0) {
          updateAutehnUser({ ...fetchedUsers[0], isAuthen: true });
		  navigate("/");
        }else{
			navigate("/login");
		}
      });
  };

    return (
      <UserContext.Provider value={{ currentUser: authenUser }}>
		  
		<Router>
			<PrivateRoute path="/">
      
				<FeaturedPosts path="/"/>
				<Profile path="/profile"/>
				<Post path="/posts/:id" />
				<Createpost path="/createPost/"></Createpost>
			</PrivateRoute>
			<Login  handleLogin={handleSubmit} path="/login"></Login>
		</Router>
      </UserContext.Provider>
    );
}
