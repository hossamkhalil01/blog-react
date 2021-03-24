import { Link } from "@reach/router";
import { useEffect, useState } from "react";

export function Post({ id }) {

    const [comments, updatePost] = useState({
      comments_array:[]
    });
    const [post, setPost] = useState({
      title:"",
      body:""
    });
      useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
          .then((response) => response.json())
          .then((post) => {
            setPost({ post });
          });
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
          .then((response) => response.json())
          .then((comments) => {
            updatePost({ ...comments, comments_array:comments });
          });
      }, []);
    
      return (
        <div>
            <p>{post.title}</p>
            <p>{post.body}</p>

            <h3>Comment section</h3>

            {comments.comments_array.map((comment) => {
              return <div key={comment.id}>
                <p>Commenter: {comment.name}</p>
                <p>{comment.body}</p>
              </div>;
            })}

            <Link to="/">Back</Link>
        </div>
      );


}