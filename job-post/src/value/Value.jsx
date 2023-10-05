import React from "react";
import simple from "../assets/images/simple.jpg";
import home from "../assets/images/home.jpg";
import work from "../assets/images/work.jpg";

const Value = () => {
  return (
    <div className="mt-[6rem] mb-[4rem]">
      <h1 className="w-[400px] font-semibold block py-[2rem] text-[25px]">
        Let's help you find a job at the comfort of your home
      </h1>
      <div className="grid grid-cols-3 gap-[10rem] place-content-center">
        <div className="singleGrid p-[1.5rem] rounded-xl hover:bg-accent cursor-pointer hover:text-text ease-in duration-300">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-inherit-hover h-[40px] w-[40px] flex items-center justify-center">
              <img src={simple} alt="" className="rounded-full" />
            </div>
            <span className=" font-semibold">Simplicity</span>
          </div>
          <p className=" opacity-70 font-semibold text-[15px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
        </div>
        <div className="singleGrid p-[1.5rem] rounded-xl hover:bg-accent cursor-pointer hover:text-text ease-in duration-300">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-inherit-hover h-[40px] w-[40px] flex items-center justify-center">
              <img src={home} alt="" className="rounded-full" />
            </div>
            <span className=" font-semibold">Directly from home</span>
          </div>
          <p className=" opacity-70 font-semibold text-[15px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
        </div>
        <div className="singleGrid p-[1.5rem] rounded-xl hover:bg-accent cursor-pointer hover:text-text ease-in duration-300">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-inherit-hover h-[40px] w-[40px] flex items-center justify-center">
              <img src={work} alt="" className="rounded-full" />
            </div>
            <span className=" font-semibold">100% Free</span>
          </div>
          <p className=" opacity-70 font-semibold text-[15px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Value;
