import { useState } from "react";
import "./LoginPage.css";

export function LoginPage({ handleLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (

    <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="post-title" className="form-label">
              Username
            </label>
            <input
              id="post-title"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="post-body" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="post-body"
              onChange={(e) => setPassword(e.target.value)}
              value={user.email}
            />
          </div>

          <button className="btn btn-danger">Login</button>
          <div style={{ color: "red", marginTop: "10px" }}>
            {authenUser.errorMsg}
          </div>
        </form>
      </div>


    // <div className="login-form">
    //   <label htmlFor="username">
    //     Username
    //     <input
    //       type="text"
    //       value={username}
          // onChange={(e) => setUsername(e.target.value)}
    //     />
    //   </label>
    //   <label htmlFor="password">
    //     Password
    //     <input
    //       type="password"
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}
    //     />
    //   </label>
    //   <button onClick={() => handleLogin(username, password)}>Login</button>
    // </div>
  );
}
