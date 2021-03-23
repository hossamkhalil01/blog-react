import { Router } from "@reach/router";
import './Blog.css';
import { Auth } from "./components/Auth";
import { Profile } from "./components/Profile";

function Blog() {
  return (
    <Router>
      <Auth path="/" />
      <Profile path="/profile" />
    </Router>
  );
}

export default Blog;
