import { useState } from "react";

export function Posts({ userId }) {

    const [posts, updatePosts] = useState();


    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(posts => updatePosts(posts));

    }, [updatePosts])

    if (posts) {
        
        if (userId) {
            {posts.filter( (post) =>
                post.userId == userId  
            )}
        }else{
            posts.slice(0,6);   
        }
    }
    updatePosts(posts)

    return (
        <div>
        {posts.forEach(post => {
            <div>
                <h2>{post.title}</h2>
                <p>{post.body.substring(0,40)}</p>
            </div>
        })
        }
        </div>


    );

    const [] = useState

}

