import { useState } from "react";

export function Auth() {
  const [user, updateUser] = useState();
  return (
    <form>
      <input type="text" placeholder="enter your username"></input>
      <input type="email" placeholder="enter your email"></input>
      <button
        type="submit"
        onClick={() => {
          updateUser();
        }}
      >
        Log in{" "}
      </button>
    </form>
  );
}
