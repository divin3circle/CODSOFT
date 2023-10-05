import React from "react";
/* import { BiFiveTime } from "react-icons/bi" */
import { FaBusinessTime } from "react-icons/fa";
import logo1 from "../assets/images/google.jpg";
const Jobs = () => {
  return (
    <div>
      <div className="jobContainer flex flex-wrap justify-center items-center gap-10">
        <div className="w-[250px] p-[20px] bg-card hover:bg-accent cursor-pointer ease-in duration-200 singleJob group group/items rounded-lg shadow-md shadow-accent hover:scale-105 ">
          <span className="flex justify-center items-center gap-4">
            <h1 className=" group-hover:text-background font-semibold text-[16px]">
              Web Developer
            </h1>
            <span className="text-card/90 font-400 flex justify-center items-center gap-2">
              <FaBusinessTime />
              Now
            </span>
          </span>
          <h6 className="text-text font-400">Canada</h6>
          <p className="text-[13px] text-text py-[20px] border-t-[2px] group-hover:text-background mt-[20px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            suscipit ullam nemo quo itaque, temporibus ipsam ratione consectetur
            hic nihil accusamus explicabo dignissimos error distinctio esse,
            adipisci harum, amet neque?
          </p>

          <div className="company flex items-center gap-2">
            <img
              src={logo1}
              alt="company_logo"
              className="w-[15%] h-[15%] rounded-full "
            />
            <span className="text-[14px] block py-[1rem]">Google</span>
          </div>
          <button className="rounded-[10px] border-[2px] block p-[10px] w-full text-[14px] font-semibold hover:bg-background ease-in duration-150 ">
            Get this job
          </button>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
