import { useState, useEffect } from "react";

export function Posts({ userId }) {
  const [userPosts, updatePosts] = useState({
    posts: []
  });
  
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
      .then((response) => response.json())
      .then((posts) => {
        updatePosts({ ...userPosts,posts });
      });
  }, []);

  return (
    <div>
      {userPosts.posts.map((post) => {
       return <div>
          <p>{post.title}</p>
          <p>{post.body.substring(0, 30)}</p>
        </div>;
      })}
    </div>
  );
}
