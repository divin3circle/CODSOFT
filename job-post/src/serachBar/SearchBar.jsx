import React from "react";
import { AiOutlineSearch, AiOutlineCloseCircle } from "react-icons/ai";

const SearchBar = () => {
  return (
    <div className="searchDiv grid gap-10 p-[3rem] bg- rounded-[10px]">
      <form action="">
        <div className="rounded-[8px] gap-[10px] bg-hover firstDiv flex justify-between items-center p-5 shadow-md shadow-accent ">
          <div className="flex gap-2 items-center">
            <AiOutlineSearch className="icon text-[25px]" />
            <input
              className="bg-transparent w-[100%] focus:outline-none text-accent text-lg font-[400]"
              type="text"
              placeholder="Job title or keyword"
            />
            <AiOutlineCloseCircle className="text-secondaryText text-[30px] icon hover:text-accent ease-in duration-150" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
