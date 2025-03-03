import StartPage from "./assets/components/StartPage";
import Translator from "./assets/components/Translator";

export default function App() {
  return (
    <div class="w-full h-screen bg-gradient-to-r from-[#051923] to-[#003554] flex justify-center items-center">
      <div class="w-[90%] max-w-lg bg-[#006494] rounded-xl shadow-2xl shadow-gray-500 flex flex-col">
        <Translator />
        {/* <StartPage /> */}
      </div>
    </div>
  );
}
