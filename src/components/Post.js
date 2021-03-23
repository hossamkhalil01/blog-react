import { Link } from "@reach/router";
import { useEffect, useState } from "react";

export function Post({ currentPost }) {

    const [comments, updatePost] = useState();
    
      useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${currentPost.id}/comments`)
          .then((response) => response.json())
          .then((comments) => {
            updatePost({ comments });
          });
      }, []);
    
      return (
        <div>
            <p>{currentPost.title}</p>
            <p>{currentPost.body}</p>

            <h3>Comment section</h3>

            {comments.map((comment) => {
              return <div key={comment.id}>
                <p>Commenter: {comment.name}</p>
                <p>{comment.body}</p>
              </div>;
            })}

            <Link to="/posts">Back</Link>
        </div>
      );


}