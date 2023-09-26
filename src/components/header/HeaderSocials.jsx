import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a href="https://linkedin.com/in/tania-amanda" target="__blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/crystal4000" target="__blank">
        <FaGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
