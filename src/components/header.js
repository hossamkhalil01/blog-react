import { Link } from "@reach/router";
export function Header(){
    return (
        <div>
             <Link to="/profile">profile</Link>
             <Link to="/createPost">create Post</Link>
             <Link to="/login">log out</Link>
        </div>
    )
}