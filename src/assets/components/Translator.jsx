import React, { useState } from "react";

const Translator = ({ onCloseTranslator, languages }) => {
  const [languageFrom, setLanguageFrom] = useState("en");
  const [languageTo, setLanguageTo] = useState("en");
  const [languageDropdownVisible, setLanguageDropdownVisible] = useState(false);
  const [languageSelectedType, setLanguageSelectedType] = useState(null);

  const handleSelectedLanguage = (type) => {
    setLanguageDropdownVisible(
      (languageDropdownVisible) => !languageDropdownVisible
    );
    setLanguageSelectedType(type);
  };

  console.log(languages);
  return (
    <div>
      <div className="p-5 space-y-5 relative">
        <div className="flex justify-between items-center ">
          <div className="flex justify-evenly items-center w-[90%] p-1 text-white text-xl font-bold bg-gradient-to-l from-[#051923] to-[#003554] rounded-md">
            <div
              className="cursor-pointer hover:text-black"
              onClick={() => handleSelectedLanguage("from")}
            >
              English
            </div>
            <i className="fa-solid fa-right-left cursor-pointer hover:text-black"></i>
            <div
              className="cursor-pointer hover:text-black"
              onClick={() => handleSelectedLanguage("to")}
            >
              Serbian
            </div>
          </div>
          <div>
            <button className="cursor-pointer" onClick={onCloseTranslator}>
              <i className="fa-regular fa-rectangle-xmark text-4xl hover:text-red-800 text-red-500 font-bold"></i>
            </button>
          </div>
        </div>
        {languageDropdownVisible && (
          <div className="">
            <ul className="text-white font-extralight bg-gradient-to-b from-[#051923] to-[#003554] absolute top-16 left-5 w-[93%] h-[85%] text-xs text-center overflow-auto rounded-md">
              {Object.entries(languages).map(([key, value]) => {
                return (
                  <li className="p-1" key={key}>
                    {value}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
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
