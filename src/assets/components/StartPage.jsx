import React from "react";

const StartPage = ({ onShowTranslator }) => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-4 sm:p-8 md:p-6">
      <div className="w-full h-64 bg-[#0582CA] rounded-b-full rounded-tl-full pr-6 flex flex-col justify-center text-gray-100">
        <span className="font-arab text-5xl sm:text-6xl text-right">
          السلام والحب
        </span>
        <span className="font-eng text-3xl sm:text-4xl text-right">
          peace and love
        </span>
        <span className="font-cir text-3xl text-center">мир и любовь</span>
        <span className="font-hin text-2xl pl-8">शांति और प्रेम</span>
        <span className="font-jap text-xl pl-10">平和と愛</span>
      </div>
      <div className="w-full flex justify-center items-center pt-5 sm:pt-10">
        <h1 className="font-jap sm:text-4xl font-bold mr-10 md:mr-30 md:text-3xl uppercase text-white text-lg ">
          translate-app
        </h1>
        <button
          href="#"
          className="rounded-md bg-gray-300 px-3 py-2 text-sm font-bold sm:px-5 sm:py-3 sm:text-xl text-[#051923] shadow-xs hover:bg-[#051923] hover:text-gray-300 focus-visible:#0582ca start"
          onClick={onShowTranslator}
        >
          START
        </button>
      </div>
    </div>
  );
};

export default StartPage;
// px-5 py-3 text-xl
