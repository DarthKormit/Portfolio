import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function Home() {
  let navigate = useNavigate();
  let { username } = useParams();
  return (
    <div className="Home">
      <h1>Home</h1>
      <button
        onClick={() => {
          navigate("/projects");
        }}
      >
        Go to Projects
      </button>
      <button
        onClick={() => {
          navigate("/contact");
        }}
      >
        Contact Info
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          window.open("https://nz.linkedin.com/", "_blank");
          }}
      >
        Linkedin
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          window.open("https://github.com/", "_blank");
          }}
      >
        Github
      </button>
    </div>
  );
}

export default Home;
