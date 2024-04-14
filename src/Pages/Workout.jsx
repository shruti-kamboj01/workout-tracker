import React from "react";
import { MdArrowBackIos } from "react-icons/md";
import chart from "../assets/Chart.png";
import { GoAlert } from "react-icons/go";
import img1 from "../assets/Ellipse1.png";
import img2 from "../assets/Ellipse2.png";
import img3 from "../assets/Ellipse3.png";
import { CiSearch } from "react-icons/ci";
import group1 from "../assets/Group(1).png";
import group from "../assets/Group.png";
import vector1 from "../assets/Vector(1).png";
import vector2 from "../assets/Vector(2).png";
import { useNavigate } from "react-router-dom";
const Workout = () => {

  const navigate = useNavigate()
  return (

    <>
      <div className="w-11/12 mx-auto">
        <div className="flex flex-row gap-x-24 mt-12">
          <div
            className=" rounded-md bg-gray-100 w-fit p-2"
            onClick={() => navigate("/goals")}
          >
            {" "}
            <MdArrowBackIos />{" "}
          </div>
          <h1 className="font-semibold text-[20px]"> Workout Tracker</h1>
        </div>
        <div className="mt-10 flex justify-center">
          <img src={chart} />
        </div>

        <div className="px-2 py-2 rounded-lg bg-gradient-to-r from-[#819DFF47]  to-[#10101000] flex mt-6 items-center gap-x-3">
          <GoAlert size={20} className="text-violet-500 font-bold" />
          <p className="text-[12.57px] w-48 leading-[15px] font-medium">
            You've burned fewer calories than yesterday. Time to get moving!{" "}
          </p>
        </div>

        <div className="flex justify-between mt-8">
          <p className="font-semibold text-[16px]">Upcoming Workout</p>
          <button className="text-gray-400 text-[12px] font-medium">
            See more
          </button>
        </div>

        <div className="flex justify-between mt-6 shadow-lg rounded-lg p-2">
          <div className="flex gap-x-3">
            <img src={img1} />
            <div className="flex flex-col gap-y-1">
              <p className="text-[12px] font-medium">Full Body Workout</p>
              <p className="text-gray-400 text-[10px] font-medium">Today 3pm</p>
            </div>
          </div>

          <div className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              id="switch"
              className="sr-only peer"
              checked
            />
            <div
              className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300
               dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full 
               rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white  after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
            ></div>
          </div>
        </div>

        <div className="flex justify-between mt-6 shadow-lg rounded-lg p-2">
          <div className="flex gap-x-3">
            <img src={img2} />
            <div className="flex flex-col gap-y-1">
              <p className="text-[12px] font-medium">Upper Body Workout</p>
              <p className="text-gray-400 text-[10px] font-medium">
                4 Feb, 3:30 pm
              </p>
            </div>
          </div>

          <div className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              id="switch"
              className="sr-only peer"
              checked
            />
            <div
              className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300
               dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full 
               rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white  after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
            ></div>
          </div>
        </div>

        <div className="mt-3">
          <p className="text-[16px] font-semibold">What Do You Want to Train</p>
        </div>
        <div className="bg-blue-200 flex justify-between rounded-lg p-3">
          <div className="flex flex-col gap-y-2">
            <p className="text-[12px] font-medium">Full Body Workout</p>
            <p className="text-[10px] font-medium">Arms</p>
            <p className="text-[10px] font-medium">Chest</p>
          </div>
          <img src={img3} />
        </div>
      </div>
      <div className="bg-white rounded-b-lg -mt-10 z-100 absolute  w-full flex justify-evenly p-3">
        <img src={vector1} />
        <img src={group} />

        <div className="rounded-full bg-gradient-to-r from-[#DEE5FF]  to-[#809AFF] w-fit p-3 -mt-5">
          <CiSearch className="text-white font-extrabold text-2xl" />
        </div>
        <img src={vector2} />
        <img src={group1} />
      </div>
    </>
  );
};

export default Workout;
