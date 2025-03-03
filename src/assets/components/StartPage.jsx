import React from "react";

const StartPage = ({ onShowTranslator }) => {
  return (
    <div class="w-full h-full flex flex-col justify-center items-center p-8">
      <div class="w-full h-64 bg-[#0582CA] rounded-b-full rounded-tl-full pr-6 flex flex-col justify-center text-gray-100">
        <span class="font-arab text-6xl text-right">السلام والحب</span>
        <span class="font-eng text-4xl text-right">peace and love</span>
        <span class="font-cir text-3xl text-center">мир и любовь</span>
        <span class="font-hin text-2xl pl-8">शांति और प्रेम</span>
        <span class="font-jap text-xl pl-10">平和と愛</span>
      </div>
      <div class="w-full flex justify-center items-center pt-10">
        <h1 class="font-jap text-4xl font-bold mr-8 uppercase text-white">
          translate-app
        </h1>
        <button
          href="#"
          class="rounded-md bg-gray-300 px-5 py-3 text-xl font-bold text-[#051923] shadow-xs hover:bg-[#051923] hover:text-gray-300 focus-visible:#0582ca start"
          onClick={onShowTranslator}
        >
          START
        </button>
      </div>
    </div>
  );
};

export default StartPage;
