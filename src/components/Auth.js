import { useEffect, useState } from "react";
export function Auth() {

  const [user, updateUser] = useState();
  const [submited , updateSubmit] = useState({submited:false});

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => updateUser(users));
  }, [updateUser]);

  const handleChange = (key, value) => {
    updateUser({ [key]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

  }
  return (

    <form onSubmit={this.handleSubmit}>


      <div className="mb-3">
        <label htmlFor="post-title" className="form-label">username</label>
        <input id="post-title" onChange={(e) => handleChange("username", e.target.value)} value={user.username} className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="post-body" className="form-label">email:</label>
        <textarea className="form-control" id="post-body" onChange={(e) => handleChange("email", e.target.value)} value={user.email} rows="3"></textarea>
      </div>
      <button className="btn btn-danger">Login</button>
    </form>

  );

}
