import { useState } from "react";
import StartPage from "./assets/components/StartPage";
import Translator from "./assets/components/Translator";
import { languages } from "../src/languagesObject";

export default function App() {
  const [showTranslator, setShowTranslator] = useState(false);

  return (
    <div className="w-full h-screen bg-gradient-to-r from-[#051923] to-[#003554] flex justify-center items-center">
      <div className="w-[90%] max-w-lg bg-[#006494] rounded-xl shadow-2xl shadow-gray-500 flex flex-col">
        {showTranslator ? (
          <Translator
            onCloseTranslator={() => setShowTranslator(false)}
            languages={languages}
          />
        ) : (
          <StartPage onShowTranslator={() => setShowTranslator(true)} />
        )}
      </div>
    </div>
  );
}
