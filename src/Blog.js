import './Blog.css';
import { Auth } from "./components/Auth";
import { Profile } from "./components/profile"
import { Router } from "@reach/router"

function Blog() {
  return (
    <Router>
      <Auth path="/"/>
      <Profile path="/profile"  />
    </Router>
  );
}

export default Blog;
