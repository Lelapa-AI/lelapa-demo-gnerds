import { Dropdown } from "./dropdown";
import { MdSwapHoriz } from "react-icons/md";
import PropTypes from 'prop-types';

export function LanguageDropdown({
  inputLanguageState,
  setInputLanguageState,
  outputLanguageState,
  setOutputLanguageState,
}) {
  return (
    <div className="flex w-full items-center px-2 text-black gap-2 justify-between border rounded-lg h-10">
      <Dropdown
        languageState={inputLanguageState}
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

LanguageDropdown.propTypes = {
  inputLanguageState: PropTypes.object.isRequired,
  setInputLanguageState: PropTypes.func.isRequired,
  outputLanguageState: PropTypes.object.isRequired,
  setOutputLanguageState: PropTypes.func.isRequired,
};
