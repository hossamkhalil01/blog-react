import { useContext } from "react";
import { Header } from "./header";
import { Posts } from "./Posts";
import { UserContext } from "./UserContext";

export function Profile() {
  const currentUser = useContext(UserContext).currentUser;

  return (
    <div>
      <Header />
      <div className="container">
        <h1>Welcome Back {currentUser.name}  !!</h1>
        <br />
        <h2>Your Recent Posts: </h2>
        <Posts userId={currentUser.id}></Posts>
      </div>
    </div>
  );
}
