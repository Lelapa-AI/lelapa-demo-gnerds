import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import { FaChevronDown } from "react-icons/fa6";
import { HiCheck } from "react-icons/hi";
import clsx from "clsx";
import { useState } from "react";
import keys from "lodash/keys";
import map from "lodash/map";
import PropTypes from "prop-types";

import { LANG_CODES } from "../../constants";
import { useSettingsStore } from "../../store";

export const Selector = ({ onFinish }) => {
  const [query, setQuery] = useState("");
  const LANGUAGES = map(keys(LANG_CODES), (language, index) => ({
    id: index,
    name: language,
  }));
  const [selected, setSelected] = useState(LANGUAGES[1]);
  const { setDefaultLanguage } = useSettingsStore();

  const filteredLanguages =
    query === ""
      ? LANGUAGES
      : LANGUAGES.filter((language) => {
          return language.name.toLowerCase().includes(query.toLowerCase());
        });

  const handleSelect = (language) => {
    setSelected(language);
    setDefaultLanguage(language.name);
    setTimeout(onFinish, 1500);
  };

  return (
    <div className="mt-[10%]">
      <Combobox
        value={selected}
        onChange={handleSelect}
        onClose={() => setQuery("")}
        __demoMode
      >
        <div className="relative">
          <ComboboxInput
            className={clsx(
              "w-full rounded-lg border-none bg-white/5 py-1.5 pr-8 pl-3 text-sm/6 text-[black]",
              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
            )}
            displayValue={(language) => language?.name}
            onChange={(event) => setQuery(event.target.value)}
          />
          <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5">
            <FaChevronDown className="size-4 fill-[black] group-data-[hover]:fill-white" />
          </ComboboxButton>
        </div>

        <ComboboxOptions
          anchor="bottom"
          transition
          className={clsx(
            "w-[var(--input-width)] rounded-xl border border-primary bg-white/5 p-1 [--anchor-gap:var(--spacing-1)] empty:invisible",
            "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0"
          )}
        >
          {filteredLanguages.map((language) => (
            <ComboboxOption
              key={language.id}
              value={language}
              className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10"
            >
              <HiCheck className="invisible size-4 fill-primary group-data-[selected]:visible" />
              <div className="text-sm/6 text-[white]">{language.name}</div>
            </ComboboxOption>
          ))}
        </ComboboxOptions>
      </Combobox>
    </div>
  );
};

Selector.propTypes = {
  onFinish: PropTypes.func.isRequired,
};
