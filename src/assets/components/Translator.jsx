import React from "react";

const Translator = ({ onCloseTranslator }) => {
  return (
    <div>
      <div class="p-5 space-y-5 ">
        <div class="flex justify-between items-center ">
          <div class="flex justify-evenly items-center w-[90%] p-1 text-white text-xl font-bold bg-gradient-to-l from-[#051923] to-[#003554] rounded-md">
            <h2>English</h2>
            <i class="fa-solid fa-right-left "></i>
            <h2>Serbian</h2>
          </div>
          <div>
            <button class="cursor-pointer" onClick={onCloseTranslator}>
              <i class="fa-regular fa-rectangle-xmark text-4xl hover:text-red-800 text-red-500 font-bold"></i>
            </button>
          </div>
        </div>

        <div>
          <div class="pb-3">
            <textarea
              class="bg-(--color-5) w-full h-[25vh] rounded-md"
              name=""
              id=""
            ></textarea>
            <div class="flex flex-col items-center space-y-1">
              <h3>100/200</h3>
              <button class="bg-[#0582ca] text-[#051923] text-1xl font-semibold uppercase py-5 px-10 rounded-lg hover:bg-[#00a6fb] hover:text-black active:text-white translate-text ">
                translate text <i class="fa-solid fa-turn-down"></i>
              </button>
            </div>
          </div>
          <div class="pt-2">
            <textarea
              class="bg-(--color-5) w-full h-[25vh] rounded-md"
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
