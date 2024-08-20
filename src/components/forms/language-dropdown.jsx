import { Dropdown } from "./dropdown";
import { MdSwapHoriz } from "react-icons/md";

export function LanguageDropdown({
  inputlanguageState,
  setInputLanguageState,
  outputLanguageState,
  setOutputLanguageState,
}) {
  return (
    <div className="flex w-full items-center px-2 text-black gap-2 justify-between border rounded-lg h-10">
      <Dropdown
        languageState={inputlanguageState}
        setLanguageState={setInputLanguageState}
      />
      <span>
        <MdSwapHoriz size={24} color="#ffffff" />
      </span>
      <Dropdown
        languageState={outputLanguageState}
        setLanguageState={setOutputLanguageState}
      />
    </div>
  );
}
