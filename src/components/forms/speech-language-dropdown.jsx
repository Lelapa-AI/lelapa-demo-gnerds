import { Dropdown } from "./dropdown";
import { MdSwapHoriz } from 'react-icons/md';
import { SpeechDropdown } from "./spech-dropdown";

export function LanguageDropdown( { inputlanguageState, setInputLanguageState, outputLanguageState, setOutputLanguageState }) {

    return (
        <div className="flex items-center px-2 text-black gap-2 justify-between border rounded-lg h-10">
            <Dropdown languageState={inputlanguageState} setLanguageState={setInputLanguageState}/>
            <span><MdSwapHoriz size={24} color="#ffffff" /></span>
            <SpeechDropdown languageState={outputLanguageState} setLanguageState={setOutputLanguageState}/>
        </div>
    );
}
