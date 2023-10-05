import React from "react";
import { AiOutlineSearch, AiOutlineCloseCircle } from "react-icons/ai";
import { FaBusinessTime } from "react-icons/fa";
import { BiCurrentLocation } from "react-icons/bi";

const SearchBar = () => {
  return (
    <div className="searchDiv grid gap-10 p-[2rem] bg- rounded-[10px]">
      <form action="">
        <div className="rounded-[8px] gap-[10px] bg-card firstDiv flex justify-between items-center p-2 shadow-md shadow-accent ">
          <div className="flex gap-2 items-center">
            <AiOutlineSearch className="icon text-[25px]" />
            <input
              className="bg-transparent w-[100%] focus:outline-none text-text text-lg font-[400]"
              type="text"
              placeholder="Job title or keyword"
            />
            <AiOutlineCloseCircle className="text-secondaryText text-[30px] icon hover:text-accent ease-in duration-150" />
          </div>
          <div className="flex gap-2 items-center">
            <FaBusinessTime className="icon text-[25px]" />
            <input
              className="bg-transparent w-[100%] focus:outline-none text-text text-lg font-[400]"
              type="text"
              placeholder="Job type"
            />
            <AiOutlineCloseCircle className="text-secondaryText text-[30px] icon hover:text-accent ease-in duration-150" />
          </div>
          <div className="flex gap-2 items-center">
            <BiCurrentLocation className="icon text-[25px]" />
            <input
              className="bg-transparent w-[100%] focus:outline-none text-text text-lg font-[400]"
              type="text"
              placeholder="Job location"
            />
            <AiOutlineCloseCircle className="text-secondaryText text-[30px] icon hover:text-accent ease-in duration-150" />
          </div>
          <button className="h-full bg-blue-700 text-text hover:bg-accent p-3 px-4 rounded-[8px]">
            Search
          </button>
        </div>
      </form>
      <div className="secDiv flex justify-center gap-10 items-center">
        <div className="singleSearch flex gap-2 items-center">
          <label htmlFor="level" className="text-hover font-semibold">
            Sort by:
          </label>
          <select
            name=""
            id="level"
            className="bg-card rounded-md px-4 py-2 font-300 text-hover"
          >
            <option value="">Job level</option>
            <option value="">Entry level</option>
            <option value="">Intermediate</option>
            <option value="">Expert</option>
          </select>
        </div>
        <div className="singleSearch flex gap-2 items-center">
          <label htmlFor="type" className="text-hover font-semibold">
            Sort by:
          </label>
          <select
            name=""
            id="type"
            className="bg-card rounded-md px-4 py-2 font-300 text-hover"
          >
            <option value="">Job type</option>
            <option value="">Full-time</option>
            <option value="">Contract</option>
            <option value="">Part-time</option>
            <option value="">Remote</option>
          </select>
        </div>
        <div className="singleSearch flex gap-2 items-center">
          <label htmlFor="relevance " className="text-hover font-semibold">
            Sort by:
          </label>
          <select
            name=""
            id="relevance"
            className="bg-card rounded-md px-4 py-2 font-300 text-hover"
          >
            <option value="">Relevance</option>
            <option value="">Inclusive</option>
            <option value="">Starts with</option>
            <option value="">Has</option>
          </select>
        </div>
        <span className="text-hover font-bold cursor-pointer hover:animate-bounce ease-in duration-150">
          Reset filters
        </span>
      </div>
    </div>
  );
};

export default SearchBar;
