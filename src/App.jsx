import { useState } from "react";
import StartPage from "./assets/components/StartPage";
import Translator from "./assets/components/Translator";

export default function App() {
  const [showTranslator, setShowTranslator] = useState(false);

  return (
    <div class="w-full h-screen bg-gradient-to-r from-[#051923] to-[#003554] flex justify-center items-center">
      <div class="w-[90%] max-w-lg bg-[#006494] rounded-xl shadow-2xl shadow-gray-500 flex flex-col">
        {showTranslator ? (
          <Translator onCloseTranslator={() => setShowTranslator(false)} />
        ) : (
          <StartPage onShowTranslator={() => setShowTranslator(true)} />
        )}
      </div>
    </div>
  );
}
