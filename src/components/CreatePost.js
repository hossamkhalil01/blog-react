import { Link, navigate, Redirect } from "@reach/router";
import { Posts } from "./Posts";
import { FeaturedPosts } from "./FeaturedPosts";
import { UserContext } from "./UserContext";
import { useState } from "react";
import { useContext } from "react";
import { Header } from "./header";
// import { UserContext } from "./UserContext";

export function Createpost() {
  const userId = useContext(UserContext).currentUser.id;
  const [newPost, setPost] = useState({
      userId: userId,
      title:"",
      body:""
  });

  const handleChange = (key, value) => {
    setPost({ ...newPost, [key]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newPost);
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: newPost.title,
        body: newPost.body,
        userId: newPost.userId,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        navigate("/");
      });
  };  
    return (
        <div>        
            <Header></Header>
        <div className="container">
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="post-title" className="form-label">
                Title
                </label>
                <input
                id="post-title"
                type="text"
                onChange={(e) => handleChange("title", e.target.value)}
                value={newPost.title}
                className="form-control"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="post-body" className="form-label">
                Body
                </label>
                <textarea className="form-control"  id="post-body" onChange={(e) => handleChange("body", e.target.value)}
                value={newPost.body} cols="10" rows="15">
                </textarea>
            </div>
            <button className="btn btn-danger">Add Post</button>
            </form>
        </div>
      </div>
    );
}
