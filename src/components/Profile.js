import { useContext } from "react";
import { Posts } from "./Posts";
import { UserContext } from "./UserContext";

export function Profile() {

    const currentUser = useContext(UserContext).currentUser;

    return (
        <div>
            <h1>Welcome Back {currentUser.name}  </h1>
            <h2>Your recent posts: </h2>
            <Posts userId={currentUser.id} > </Posts>
        </div>
    )

}