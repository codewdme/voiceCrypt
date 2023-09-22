import React from "react";

const IntroductionSection = () => {
  return (
    <div className=" p-12 pr-16 flex flex-col gap-24 ">
      {/* part 1 */}
      <div className=" flex gap-12  ">
        <div className="flex flex-col gap-12 ">
          <h1 className="text-4xl">Ready to get more out of work and life?</h1>

          <p>
            Your new go-to. Rolling easier work, rewarding careers, faster pay,
            and everyday savings into the world’s first employment superapp.
          </p>

          <button className=" w-[15%] p-2 px-4 text-sm font-semibold bg-darkPurple hover:bg-transparent  hover:z-10 text-white rounded-full   btn btn-fill-purple  hover:text-darkPurple">
            Download
          </button>
        </div>
        <div className="overflow-hidden w-[50%]">
          {/* image 1 */}
          <img
            className="rounded-xl"
            src="https://images.unsplash.com/photo-1505968409348-bd000797c92e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80"
          />
        </div>
      </div>
      {/* part 2 */}
      <div className="flex gap-12">
        {/* image 2*/}
        <div className="overflow-hidden w-[50%]">
          <img
            className="rounded-xl"
            src="https://images.unsplash.com/photo-1505968409348-bd000797c92e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80"
          />
        </div>
        <div className="flex flex-col gap-12 ">
          <h1 className="text-4xl">Ready to get more out of work and life?</h1>

          <p>
            Your new go-to. Rolling easier work, rewarding careers, faster pay,
            and everyday savings into the world’s first employment superapp.
          </p>

          <button className=" w-[15%] p-2 px-4 text-sm font-semibold bg-darkPurple hover:bg-transparent  hover:z-10 text-white rounded-full   btn btn-fill-purple  hover:text-darkPurple">
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default IntroductionSection;
