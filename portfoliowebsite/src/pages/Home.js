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
    </div>
  );
}

export default Home;
