import React, { useState } from "react";

const Translator = ({ onCloseTranslator, languages }) => {
  const [languageFrom, setLanguageFrom] = useState("Serbian");
  const [languageTo, setLanguageTo] = useState("English");
  const [languageDropdownVisible, setLanguageDropdownVisible] = useState(false);
  const [languageSelectedType, setLanguageSelectedType] = useState(null);
  const [textInput, setTextInput] = useState("");
  const [textTranslated, setTextTranslated] = useState("");

  const handleSelectedLanguage = (type) => {
    setLanguageDropdownVisible(
      (languageDropdownVisible) => !languageDropdownVisible
    );
    setLanguageSelectedType(type);
  };

  const handleSelectedLanguageCode = (shortCode) => {
    if (languageSelectedType === "from") {
      setLanguageFrom(languages[shortCode]);
    } else {
      setLanguageTo(languages[shortCode]);
    }

    setLanguageDropdownVisible(false);
  };

  const handleLanguageSwapping = () => {
    setLanguageFrom(languageTo);
    setLanguageTo(languageFrom);
  };

  const translateTextInput = async () => {
    if (textInput.trim() === "") return;

    const response = await fetch(
      `https://api.mymemory.translated.net/get?q=${textInput}&langpair=${languageFrom}|${languageTo}`
    );
    const responseJson = await response.json();
    setTextTranslated(responseJson.responseData.translatedText);
  };

  const keyEnterTranslate = (e) => {
    if (e.key === "Enter") {
      translateTextInput();
    }
  };

  // console.log(languages);
  return (
    <div>
      <div className="p-5 space-y-5 relative">
        <div className="flex justify-between items-center ">
          <div className="flex justify-evenly items-center w-[90%] p-1 text-white text-xl font-bold bg-gradient-to-l from-[#051923] to-[#003554] rounded-md">
            <div
              className="cursor-pointer hover:text-black"
              onClick={() => handleSelectedLanguage("from")}
            >
              {languageFrom || ""}
            </div>
            <i
              className="fa-solid fa-right-left cursor-pointer hover:text-black"
              onClick={handleLanguageSwapping}
            ></i>
            <div
              className="cursor-pointer hover:text-black"
              onClick={() => handleSelectedLanguage("to")}
            >
              {languageTo || ""}
            </div>
          </div>
          <div>
            <button className="cursor-pointer" onClick={onCloseTranslator}>
              <i className="fa-regular fa-rectangle-xmark text-4xl hover:text-red-800 text-red-500 font-bold"></i>
            </button>
          </div>
        </div>
        {languageDropdownVisible && (
          <div className="text-white font-extralight bg-gradient-to-b from-[#051923] to-[#003554] absolute top-14 left-5 w-[calc(100%-2.5rem)] h-[85%] text-xs text-center overflow-auto rounded-md">
            <ul>
              {Object.entries(languages).map(([shortCode, valueLanguage]) => {
                return (
                  <li
                    className="p-1 cursor-pointer hover:border-2 hover:border-white"
                    key={shortCode}
                    onClick={() => handleSelectedLanguageCode(shortCode)}
                  >
                    {valueLanguage}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
        <div>
          <div className="pb-3">
            <textarea
              className="bg-[#00a6fb] w-full h-[25vh] rounded-md resize-none p-1 text-white font-semibold"
              name=""
              id=""
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
              onKeyDown={keyEnterTranslate}
            ></textarea>
            <div className="flex flex-col items-center space-y-1">
              <h3>100/200</h3>
              <button
                className="bg-[#0582ca] text-[#051923] text-1xl font-semibold uppercase py-5 px-10 rounded-lg hover:bg-[#00a6fb] hover:text-black active:text-white translate-text "
                onClick={translateTextInput}
              >
                translate text <i className="fa-solid fa-turn-down"></i>
              </button>
            </div>
          </div>
          <div className="pt-2">
            <textarea
              className="bg-[#00a6fb] w-full h-[25vh] rounded-md resize-none p-1 text-white font-semiboldtatus"
              name=""
              id=""
              value={textTranslated}
              readOnly
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Translator;
