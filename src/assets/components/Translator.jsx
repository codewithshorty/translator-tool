import React from "react";
import { languages } from "../../languagesObject";

const Translator = ({ onCloseTranslator }) => {
  console.log(languages);
  return (
    <div>
      <div className="p-5 space-y-5 ">
        <div className="flex justify-between items-center ">
          <div className="flex justify-evenly items-center w-[90%] p-1 text-white text-xl font-bold bg-gradient-to-l from-[#051923] to-[#003554] rounded-md">
            <h2>English</h2>
            <i className="fa-solid fa-right-left "></i>
            <h2>Serbian</h2>
          </div>
          <div>
            <button className="cursor-pointer" onClick={onCloseTranslator}>
              <i className="fa-regular fa-rectangle-xmark text-4xl hover:text-red-800 text-red-500 font-bold"></i>
            </button>
          </div>
        </div>

        <div>
          <div className="pb-3">
            <textarea
              className="bg-(--color-5) w-full h-[25vh] rounded-md"
              name=""
              id=""
            ></textarea>
            <div className="flex flex-col items-center space-y-1">
              <h3>100/200</h3>
              <button className="bg-[#0582ca] text-[#051923] text-1xl font-semibold uppercase py-5 px-10 rounded-lg hover:bg-[#00a6fb] hover:text-black active:text-white translate-text ">
                translate text <i className="fa-solid fa-turn-down"></i>
              </button>
            </div>
          </div>
          <div className="pt-2">
            <textarea
              className="bg-(--color-5) w-full h-[25vh] rounded-md"
              name=""
              id=""
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Translator;
