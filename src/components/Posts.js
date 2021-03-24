import { useEffect, useState } from "react";
import { Header } from "./header";

export function Posts({ userId }) {
  const [userPosts, updatePosts] = useState({
    posts: [],
  });

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
      .then((response) => response.json())
      .then((posts) => {
        updatePosts({ ...userPosts, posts });
      });
  }, []);

  return (
    <div>
    <div className="container">
      {userPosts.posts.map((post) => {
        return (
          <div key={post.id} className="card">
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text">{post.body.substring(0, 30)}</p>
            </div>
          </div>
        );
      })}
    </div>
    </div>
  );
}
