import { useState } from "react";

export function Posts({ userId }) {

    const [posts, updatePosts] = useState();


    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(posts => console.log(posts))

    }, [updatePosts])

    if (userId) {

    }

    const [] = useState

}

