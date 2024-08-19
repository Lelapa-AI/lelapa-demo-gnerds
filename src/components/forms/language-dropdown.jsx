import { Dropdown } from "./dropdown";
import { MdSwapHoriz } from 'react-icons/md';

export function LanguageDropdown( { inputlanguageState, setInputLanguageState, outputLanguageState, setOutputLanguageState }) {

    return (
        <div className="flex items-center space-x-4">
            <Dropdown languageState={inputlanguageState} setLanguageState={setInputLanguageState}/>
            <span><MdSwapHoriz size={24} color="black" /></span>
            <Dropdown languageState={outputLanguageState} setLanguageState={setOutputLanguageState}/>
        </div>
    );
}
