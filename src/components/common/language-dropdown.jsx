import { MdSwapHoriz } from "react-icons/md";
import PropTypes from "prop-types";

import { Button, Dropdown } from ".";

export const LanguageDropdown = ({
  inputLanguageState,
  setInputLanguageState,
  outputLanguageState,
  setOutputLanguageState,
}) => {
  return (
    <div className="flex w-full items-center px-2 text-black gap-2 justify-between border rounded-lg h-10">
      <Dropdown
        languageState={inputLanguageState}
        setLanguageState={setInputLanguageState}
      />
      <span>
        <Button
          variant="text"
          onClick={() => {
            const temp = inputLanguageState;
            setInputLanguageState(outputLanguageState);
            setOutputLanguageState(temp);
          }}
        >
          <MdSwapHoriz size={24} color="#ffffff" />
        </Button>
      </span>
      <Dropdown
        languageState={outputLanguageState}
        setLanguageState={setOutputLanguageState}
      />
    </div>
  );
};

LanguageDropdown.propTypes = {
  inputLanguageState: PropTypes.string.isRequired,
  setInputLanguageState: PropTypes.func.isRequired,
  outputLanguageState: PropTypes.string.isRequired,
  setOutputLanguageState: PropTypes.func.isRequired,
};
