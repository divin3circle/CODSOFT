import React from "react";

const Navbar = () => {
  return (
    <div className="">
      <div className="navBar flex justify-between p-[3rem] items-center">
        <div className="logoDiv">
          <h1 className="logo text-[25px]">
            <strong className="font-mono text-accent">LUCKY.</strong>Jobs
          </h1>
        </div>
        {/*menu*/}
        <div className="menu flex gap-8">
          <li className="menuList hover:text-accent ease-in duration-150 text-secondaryText">
            Jobs
          </li>
          <li className="menuList hover:text-accent ease-in duration-150 text-secondaryText">
            About
          </li>
          <li className="menuList hover:text-accent ease-in duration-150 text-secondaryText">
            Companies
          </li>
          <li className="menuList hover:text-accent ease-in duration-150 text-secondaryText">
            Sign in
          </li>
          <li className="menuList hover:text-accent ease-in duration-150 text-secondaryText">
            Register
          </li>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
