import { Link } from "@reach/router";
import { useEffect, useState } from "react";

export function FeaturedPosts() {

    const [userPosts, updatePosts] = useState({
        posts: []
      });
    
      useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
          .then((response) => response.json())
          .then((posts) => {
              posts = posts.slice(0, 2);
            updatePosts({ ...userPosts, posts });
          });
      }, [userPosts]);
    
      return (
        <div>
          {
            userPosts.posts.map((post) => {
              return <div key={post.id}>
                <p>{post.title}</p>
                <p>{post.body.substring(0, 30)}</p>
                <Link to={`/posts/${post.id}`}>View Post</Link>
              </div>;
            })}
        </div>
      );


}