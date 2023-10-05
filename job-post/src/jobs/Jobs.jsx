import React from "react";
/* import { BiFiveTime } from "react-icons/bi" */
import { FaBusinessTime } from "react-icons/fa";
import logo1 from "../assets/images/google.jpg";
import { jobs } from "../assets/jobsData";
const Jobs = () => {
  return (
    <div>
      <div className="jobContainer flex flex-wrap justify-center items-center gap-10">
        {jobs.map((job, i) => {
          return (
            <div
              key={job.id}
              className="w-[250px] min-h-[380px] p-[20px] bg-card hover:bg-accent cursor-pointer ease-in duration-200 singleJob group group/items rounded-lg shadow-md shadow-accent hover:scale-105 "
            >
              <span className="flex justify-center items-center gap-4">
                <h1 className=" group-hover:text-background font-semibold text-[16px]">
                  {job.title}
                </h1>
                <span className="text-card/90 font-400 flex justify-center items-center gap-2">
                  <FaBusinessTime />
                  {job.time}
                </span>
              </span>
              <h6 className="text-text font-400">{job.location}</h6>
              <p className="text-[13px] text-text py-[20px] border-t-[2px] group-hover:text-background mt-[20px]">
                {job.desc}
              </p>

              <div className="company flex items-center gap-2">
                <img
                  src={job.image}
                  alt="company_logo"
                  className="w-[15%] h-[15%] object-fill rounded-full "
                />
                <span className="text-[14px] block py-[1rem]">
                  {job.company}
                </span>
              </div>
              <button className="rounded-[10px] border-[2px] block p-[10px] w-full text-[14px] font-semibold hover:bg-background ease-in duration-150 ">
                Get this job
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Jobs;
