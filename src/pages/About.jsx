import React from "react";
import { FaGithub } from "react-icons/fa";
function About() {
  return (
    <div>
      <div>
        <span className="text-sm pl-5">Created with ❤️ by Chinmay</span>
        <FaGithub size={32} className="m-5" />
      </div>
    </div>
  );
}

export default About;
